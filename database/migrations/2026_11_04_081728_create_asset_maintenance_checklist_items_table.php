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
        Schema::create('asset_maintenance_checklist_items', function (Blueprint $table) {
            $table->id();
            $table->uuid('public_id')->unique();
            $table->foreignId('asset_repair_log_id')
                ->constrained('asset_repair_logs')
                ->cascadeOnUpdate()
                ->cascadeOnDelete();

            $table->foreignId('maintenance_checklist_item_id')
                ->constrained('maintenance_checklist_items')
                ->cascadeOnUpdate()
                ->restrictOnDelete();

            $table->string('status')->default('pending');
            $table->text('remarks')->nullable();

            $table->timestamps();

            $table->unique([
                'asset_repair_log_id',
                'maintenance_checklist_item_id',
            ]);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('asset_maintenance_checklist_items');
    }
};
