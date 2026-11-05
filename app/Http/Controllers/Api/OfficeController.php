<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Office;
use Illuminate\Http\Request;

class OfficeController extends Controller
{
    public function getOffices(Request $request){

        $perPage = $request->integer('per_page',10);
        $search  = $request->input('search');

        $query = Office::join('divisions','divisions.id','offices.division_id')
                ->select('offices.public_id',
                        'offices.division_id',
                        'offices.office',
                        'offices.code',
                        'divisions.division',
                    )
                    ->when($search, function($query) use ($search){
                        $query->when(function ($query) use ($search){
                            $query->where('offices.code','like',"%{$search}%")
                            ->orWhere('offices.contact','like',"%{$search}%")
                            ->orWhere('offices.office_status','like',"%{$search}%");
                        });
                    })
                    ->orderBy('offices.code');

        return $query->paginate($perPage);
    }
}
