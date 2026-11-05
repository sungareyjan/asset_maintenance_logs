<?php

namespace Database\Seeders;

use App\Models\Division;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class DivisionSeeder extends Seeder
{
    public function run(): void
    {
        $divisions = [
            [
                'code' => 'AFD',
                'division' => 'Administrative and Finance Division (AFD)',
            ],
            [
                'code' => 'AMAD',
                'division' => 'Agribusiness and Marketing Assistance Division (AMAD)',
            ],
            [
                'code' => 'DIR',
                'division' => 'Directorate',
            ],
            [
                'code' => 'FOD',
                'division' => 'Field Operations Division (FOD)',
            ],
            [
                'code' => 'ILD',
                'division' => 'Integrated Laboratories Division',
            ],
            [
                'code' => 'PMED',
                'division' => 'Planning, Monitoring, and Evaluation Division (PMED)',
            ],
            [
                'code' => 'RAED',
                'division' => 'Regional Agricultural Engineering Division (RAED)',
            ],
            [
                'code' => 'RD',
                'division' => 'Regulatory Division',
            ],
            [
                'code' => 'Research',
                'division' => 'Research Division',
            ],
            [
                'code' => 'PRDP',
                'division' => 'PRDP',
            ],
        ];

        foreach ($divisions as $division) {
            Division::updateOrCreate(
                ['code' => $division['code']],
                [
                    'public_id' => Str::uuid(),
                    'division' => $division['division'],
                ]
            );
        }
    }
}