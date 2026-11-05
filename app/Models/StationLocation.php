<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StationLocation extends Model
{
    use HasFactory;

    protected $fillable = [
        'station',
        'address',
    ];

    protected $hidden = ['id'];
}
