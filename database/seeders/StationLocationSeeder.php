<?php

namespace Database\Seeders;

use App\Models\StationLocation;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class StationLocationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $stations = [
            [
                'public_id' => Str::uuid(),
                'station' => 'DA RFO3 Regional Office',
                'address' => 'Diosdado Macapagal Government Center, Brgy. Maimpis, City of San Fernando, Pampanga',
            ],
            [
                'public_id' => Str::uuid(),
                'station' => 'DA Regulatory Compound',
                'address' => 'Pampanga Capitol Compound',
            ],
            [
                'public_id' => Str::uuid(),
                'station' => 'DA-RFO3 Aurora Satellite Office',
                'address' => 'Sitio Hiwalayan, Brgy. Bacong, San Luis, Aurora',
            ],
            [
                'public_id' => Str::uuid(),
                'station' => 'DA-Research Outreach Station for Upland Development (DA-RSUD) ROS Magalang, Pampanga',
                'address' => 'Santo Niño, Magalang, Pampanga',
            ],
            [
                'public_id' => Str::uuid(),
                'station' => 'DA-Research Outreach Station for Hillyland Development (RSHD) Botolan, Zambales',
                'address' => 'Brgy. Porac, Botolan, Zambales',
            ],
            [
                'public_id' => Str::uuid(),
                'station' => 'DA-Research Outreach Station for Lowland Development (RSLD) ROS Tarlac City, Tarlac',
                'address' => 'Brgy. Paraiso, Tarlac City, Tarlac',
            ],
            [
                'public_id' => Str::uuid(),
                'station' => 'DA-Research Outreach Station for Lahar-Laden Development (RSLL) ROS San Marcelino, Zambales',
                'address' => 'Rabanes, San Marcelino, Zambales',
            ],
            [
                'public_id' => Str::uuid(),
                'station' => 'RCPC (Regional Crop Protection Center)',
                'address' => 'PhilRice Compound, Barangay Maligaya, Science City of Muñoz, Nueva Ecija',
            ],
        ];

        foreach ($stations as $station) {
            StationLocation::updateOrCreate(
                ['station' => $station['station']],
                $station
            );
        }
    }
}
