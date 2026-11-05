<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AssetMaintenanceChecklistItem extends Model
{
    use HasFactory;
    protected $hidden = ['id'];
    protected $fillable = [
        'asset_repair_log_id',
        'maintenance_checklist_item_id',
        'status',
        'remarks',
    ];
}
