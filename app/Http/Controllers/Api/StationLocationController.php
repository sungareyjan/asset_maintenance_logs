<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\StationLocation;
use Illuminate\Http\Request;

class StationLocationController extends Controller
{
    public function getStationLocation(Request $request){

        $perPage = $request->integer('per_page',10);
        $search  = $request->input('search');

        $query = StationLocation::select('public_id','station','address');
        return $query->paginate($perPage);

    }
}
