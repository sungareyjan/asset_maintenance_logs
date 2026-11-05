<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PhysicalCondition extends Model
{
    use HasFactory;

    protected $fillable = [
        'physical_condition',
    ];
}
