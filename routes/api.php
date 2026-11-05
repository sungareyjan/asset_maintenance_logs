<?php

use App\Http\Controllers\Api\AssetRepairController;
use App\Http\Controllers\Api\OfficeController;
use App\Http\Controllers\Api\StationLocationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::post('/repair',[AssetRepairController::class,'createRequestRepair']);
Route::get('/office',[OfficeController::class,'getOffices']);
Route::get('/station-location',[StationLocationController::class,'getStationLocation']);
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
