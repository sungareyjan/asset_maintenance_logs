<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Division extends Model
{
    use HasFactory;

    protected $fillable = [
        'public_id',
        'code',
        'division',
    ];

    protected $casts = [
        'public_id' => 'string',
    ];

    public function offices(): HasMany
    {
        return $this->hasMany(Office::class);
    }
}
