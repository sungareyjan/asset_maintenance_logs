<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class MaintenanceChecklistItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'maintenance_checklist_id',
        'list',
        'details',
    ];

    public function maintenanceChecklist(): BelongsTo
    {
        return $this->belongsTo(
            MaintenanceChecklist::class,
            'maintenance_checklist_id'
        );
    }
}
