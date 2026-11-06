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
        Schema::create('asset_repair_logs', function (Blueprint $table) {
            $table->id();
            $table->uuid('public_id')->unique();
            // Request Information
            $table->string('requesting_user');

            $table->foreignId('office_id')
                ->constrained('offices')
                ->restrictOnDelete();

            $table->foreignId('station_location_id')
                ->constrained('station_locations')
                ->restrictOnDelete();

            $table->string('repair_control_no')->unique();

            $table->string('service_priority')->nullable();

            // Equipment Information
            $table->foreignId('equipment_category_id')
                ->nullable()
                ->constrained('equipment_categories')
                ->restrictOnDelete();

            $table->string('brand')->nullable();
            $table->string('property_no_new')->nullable();
            $table->string('property_no_old')->nullable();
            $table->string('accountable_officer')->nullable();
            $table->string('serial_number')->nullable();
            $table->string('asset_tag_code')->nullable();
            $table->string('operating_system')->nullable();

            // Problem
            $table->text('problem_description')->nullable();

            // Repair Processing
            // $table->foreignId('technician_id')
            //     ->nullable()
            //     ->constrained('users')
            //     ->nullOnDelete();

            $table->dateTime('start_task')->nullable();
            $table->dateTime('end_task')->nullable();

            $table->text('root_cause')->nullable();
            $table->text('work_performed')->nullable();
            $table->text('technical_action')->nullable();

            // $table->string('received_by');

            $table->unsignedTinyInteger('progress')->default(1); //0-100 percent

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('asset_repair_logs');
    }
};
