<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Office extends Model
{
    use HasFactory;

    protected $fillable = [
        'code',
        'office',
        'division_id',
    ];

    protected $hidden = ['id'];

    public function division(): BelongsTo
    {
        return $this->belongsTo(Division::class);
    }
}
