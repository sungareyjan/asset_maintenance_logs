<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\AssetRepairLog;
use App\Models\AssetRepairLogEncoding;
use App\Models\Office;
use App\Models\StationLocation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Nette\Schema\ValidationException;
use Illuminate\Support\Str;

class AssetRepairController extends Controller
{
    //
    public function createRequestRepair(Request $request)
    {

        $validated = $request->validate([
            'requesting_user' => 'required|string|max:50',

            'office_id' => [
                'required',
                'uuid',
                'exists:offices,public_id',
            ],

            'station_location_id' => [
                'required',
                'uuid',
                'exists:station_locations,public_id',
            ],
            'problem_description' => 'required|string',
        ], [
            'office_id.uuid'   => 'Invalid office ID.',
            'office_id.exists' => 'Office does not exist.',

            'station_location_id.uuid'   => 'Invalid station location ID.',
            'station_location_id.exists' => 'Station location does not exist.',
        ]);
        DB::beginTransaction();

        try {

            $officeId = Office::select('id')->where(
                'public_id',
                $validated['office_id']
            )->firstOrFail();

            $stationLocationId = StationLocation::select('id')->where(
                'public_id',
                $validated['station_location_id']
            )->firstOrFail();


            $lastRequest = AssetRepairLog::whereDate(
                'created_at',
                today()
            )
                ->orderByDesc('id')
                ->first();

            $sequence = $lastRequest
                ? ((int) substr($lastRequest->repair_control_no, -3)) + 1
                : 1;

            $today = now()->format('Ymd');
            $repairControlNo = sprintf(
                'RM%s%03d',
                $today,
                $sequence
            );

            $publicId = (string) Str::uuid();
            $repairLog =  AssetRepairLog::create([
                'public_id'           => $publicId,
                'repair_control_no'   => $repairControlNo,
                'requester'           => $validated['requesting_user'],
                'office_id'           => $officeId->id,
                'station_location_id' => $stationLocationId->id,
                'description'         => $validated['problem_description']
            ]);

            $publicId = (string) Str::uuid();
            AssetRepairLogEncoding::create([
                'public_id' => $publicId,
                'process_type'        => 'request',
                'asset_repair_log_id' => $repairLog->id,
                'technician_id'       => null,
                'status'              => 'encoded',
                // 'encoded_by'          => Auth::id(),
                'encoded_by'          => 1
            ]);

            DB::commit();
            return response()->json([
                'success' => true,
                'message' => 'Repair request created successfully.',
                'data' => [
                    'repair_control_no'   => $repairLog->repair_control_no,
                    'public_id'           => $repairLog->public_id,
                    'requester'           => $repairLog->requester,
                    'office_id'           => $validated['office_id'],
                    'station_location_id' => $validated['station_location_id'],
                    'description'         => $repairLog->description,
                ],
            ], 201);
        } catch (ValidationException $e) {
            DB::rollBack();

            report($e);

            return response()->json([
                'success' => false,
                'message' => 'An unexpected error occurred.',
                'error'   => config('app.debug') ? $e->getMessage() : null,
            ], 500);
        }
    }
}
