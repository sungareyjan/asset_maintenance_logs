<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AssetRepairLogEncoding extends Model
{
    use HasFactory;
    protected $fillable = [
        'public_id',
        'process_type',
        'asset_repair_log_id',
        'technician_id',
        'status',
        'encoded_by',
    ];

    public function repairLog(): BelongsTo
    {
        return $this->belongsTo(
            AssetRepairLog::class,
            'asset_repair_log_id'
        );
    }

    public function technician(): BelongsTo
    {
        return $this->belongsTo(
            User::class,
            'technician_id'
        );
    }

    public function encodedBy(): BelongsTo
    {
        return $this->belongsTo(
            User::class,
            'encoded_by'
        );
    }
}
