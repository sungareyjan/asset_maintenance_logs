<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AssetReplaceComponent extends Model
{
    use HasFactory;

    protected $fillable = [
        'asset_repair_log_id',
        'replace_component',
        'replace_component_serial_number',
        'new_component_serial_number',
    ];

    public function repairLog(): BelongsTo
    {
        return $this->belongsTo(
            AssetRepairLog::class,
            'asset_repair_log_id'
        );
    }
}
