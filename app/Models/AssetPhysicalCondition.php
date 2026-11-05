<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AssetPhysicalCondition extends Model
{
    use HasFactory;
    protected $hidden = ['id'];
    protected $fillable =[
        'asset_repair_log_id',
        'physical_condition_id',
    ];
}
