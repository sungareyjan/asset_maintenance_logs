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
        Schema::create('asset_physical_conditions', function (Blueprint $table) {
            $table->id();
            $table->uuid('public_id')->unique();
            $table->foreignId('asset_repair_log_id')
                ->constrained('asset_repair_logs')
                ->cascadeOnUpdate()
                ->cascadeOnDelete();

            $table->foreignId('physical_condition_id')
                ->constrained('physical_conditions')
                ->cascadeOnUpdate()
                ->restrictOnDelete();

            $table->timestamps();

            $table->unique([
                'asset_repair_log_id',
                'physical_condition_id',
            ]);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('asset_physical_conditions');
    }
};
