<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('asset_repair_log_encodings', function (Blueprint $table) {
            $table->id();
            $table->uuid('public_id')->unique();
            // Process progress:
            // request, diagnostic, corrective_action,
            // checklist, review, completion
            $table->string('process_type'); // this is base on process progress

            $table->foreignId('asset_repair_log_id')
                ->constrained('asset_repair_logs')
                ->cascadeOnUpdate()
                ->cascadeOnDelete();

            $table->foreignId('technician_id')
                ->nullable()
                ->constrained('users')
                ->nullOnDelete();

            $table->string('status'); // accept the asset, repair the asset

            $table->foreignId('encoded_by')
                ->constrained('users')
                ->restrictOnDelete();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('asset_repair_log_encodings');
    }
};
