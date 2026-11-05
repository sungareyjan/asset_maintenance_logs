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
        Schema::create('asset_replace_components', function (Blueprint $table) {
            $table->id();
            $table->uuid('public_id')->unique();
            $table->foreignId('asset_repair_log_id')
                ->constrained('asset_repair_logs')
                ->cascadeOnUpdate()
                ->cascadeOnDelete();

            $table->string('replace_component');
            $table->string('replace_component_serial_number')->nullable();
            $table->string('new_component_serial_number')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('asset_replace_components');
    }
};
