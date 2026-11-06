<?php

namespace App\Models;

use App\Enums\ServiceRequestStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class AssetRepairLog extends Model
{
    use HasFactory;

    protected $fillable = [
        'public_id',
        'requesting_user',
        'office_id',
        'station_location_id',
        'repair_control_no',
        'service_priority',
        'equipment_category_id',
        'brand',
        'property_no_new',
        'property_no_old',
        'accountable_officer',
        'serial_number',
        'asset_tag_code',
        'operating_system',
        'problem_description',
        'start_task',
        'end_task',
        'root_cause',
        'work_performed',
        'technical_action',
        'progress',
        'status' => ServiceRequestStatus::class,
    ];

    protected $hidden = ['id', 'office_id', 'station_location_id'];

    public function encodings(): HasMany
    {
        return $this->hasMany(
            AssetRepairLogEncoding::class,
            'asset_repair_log_id'
        );
    }
}
