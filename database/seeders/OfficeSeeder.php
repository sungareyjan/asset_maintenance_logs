<?php

namespace Database\Seeders;

use App\Models\Office;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class OfficeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Office::insert([
            // ========================================
            // Administrative and Finance Division
            [
                'public_id' => Str::uuid(),
                'code' => 'AFD',
                'office' => 'Office of the AFD Chief',
                'division_id' => 1,
            ],
            [
                'public_id' => Str::uuid(),
                'code' => 'AS',
                'office' => 'Accounting Section',
                'division_id' => 1,
            ],
            [
                'public_id' => Str::uuid(),
                'code' => 'BS',
                'office' => 'Budget Section',
                'division_id' => 1,
            ],
            [
                'public_id' => Str::uuid(),
                'code' => 'GSS',
                'office' => 'General Services Section (GSS)',
                'division_id' => 1,
            ],
            [
                'public_id' => Str::uuid(),
                'code' => 'HRMS',
                'office' => 'Human Resource Management Section (HRMS)',
                'division_id' => 1,
            ],
            // Agribusiness and Marketing Assistance Division
            [
                'public_id' => Str::uuid(),
                'code' => 'AMAD',
                'office' => 'Office of the AMAD Chief',
                'division_id' => 2,
            ],
            [
                'public_id' => Str::uuid(),
                'code' => 'APS',
                'office' => 'Agribusiness Promotion Section (APS)',
                'division_id' => 2,
            ],
            [
                'public_id' => Str::uuid(),
                'code' => 'AISS',
                'office' => 'Agribusiness Industry Support Section (AISS)',
                'division_id' => 2,
            ],
            [
                'public_id' => Str::uuid(),
                'code' => 'MDS',
                'office' => 'Market Development Section (MDS)',
                'division_id' => 2,
            ],
            // Directorate
            [
                'public_id' => Str::uuid(),
                'code' => 'BAC',
                'office' => 'Bids and Awards Committee (BAC)',
                'division_id' => 3,
            ],
            [
                'public_id' => Str::uuid(),
                'code' => 'COA',
                'office' => 'Commission on Audit (COA)',
                'division_id' => 3,
            ],
            [
                'public_id' => Str::uuid(),
                'code' => 'IIC',
                'office' => 'Internal Inspection Committee',
                'division_id' => 3,
            ],
            [
                'public_id' => Str::uuid(),
                'code' => 'GAD',
                'office' => 'Gender and Development',
                'division_id' => 3,
            ],
            [
                'public_id' => Str::uuid(),
                'code' => 'ORED',
                'office' => 'Office of the Regional Executive Director',
                'division_id' => 3,
            ],
            [
                'public_id' => Str::uuid(),
                'code' => 'OEAMS',
                'office' => 'Office of the Regional Technical Director for Operations and Extension, and AMAD',
                'division_id' => 3,
            ],
            [
                'public_id' => Str::uuid(),
                'code' => 'RRIL',
                'office' => 'Office of the Regional Technical Director for Research, Regulation, and Integrated Laboratory Services',
                'division_id' => 3,
            ],
            [
                'public_id' => Str::uuid(),
                'code' => 'RAFIS',
                'office' => 'Regional Agriculture and Fisheries Information Section (RAFIS)',
                'division_id' => 3,
            ],
            // Field Operations Division
            [
                'public_id' => Str::uuid(),
                'code' => 'FOD',
                'office' => 'Office of the FOD Chief',
                'division_id' => 4,
            ],
            [
                'public_id' => Str::uuid(),
                'code' => '4Ks',
                'office' => '4Ks',
                'division_id' => 4,
            ],
            [
                'public_id' => Str::uuid(),
                'code' => 'AMIA',
                'office' => 'AMIA',
                'division_id' => 4,
            ],
            [
                'public_id' => Str::uuid(),
                'code' => 'APCO Aurora',
                'office' => 'APCO Aurora',
                'division_id' => 4,
            ],
            [
                'public_id' => Str::uuid(),
                'code' => 'APCO Bataan',
                'office' => 'APCO Bataan',
                'division_id' => 4,
            ],
            [
                'public_id' => Str::uuid(),
                'code' => 'APCO Nueva Ecija',
                'office' => 'APCO Nueva Ecija',
                'division_id' => 4,
            ],
            [
                'public_id' => Str::uuid(),
                'code' => 'APCO Pampanga',
                'office' => 'APCO Pampanga',
                'division_id' => 4,
            ],
            [
                'public_id' => Str::uuid(),
                'code' => 'APCO Tarlac',
                'office' => 'APCO Tarlac',
                'division_id' => 4,
            ],
            [
                'public_id' => Str::uuid(),
                'code' => 'APCO Zambales',
                'office' => 'APCO Zambales',
                'division_id' => 4,
            ],
            [
                'public_id' => Str::uuid(),
                'code' => 'Corn Program',
                'office' => 'Corn Program',
                'division_id' => 4,
            ],
            [
                'public_id' => Str::uuid(),
                'code' => 'HVCD',
                'office' => 'High Value Crops Development Program',
                'division_id' => 4,
            ],
            [
                'public_id' => Str::uuid(),
                'code' => 'IDU',
                'office' => 'Institutional Development Unit',
                'division_id' => 4,
            ],
            [
                'public_id' => Str::uuid(),
                'code' => 'LP',
                'office' => 'Livestock Program',
                'division_id' => 4,
            ],
            [
                'public_id' => Str::uuid(),
                'code' => 'OAP',
                'office' => 'Organic Agriculture Program',
                'division_id' => 4,
            ],
            [
                'public_id' => Str::uuid(),
                'code' => 'RP',
                'office' => 'Rice Program',
                'division_id' => 4,
            ],
            [
                'public_id' => Str::uuid(),
                'code' => 'SAAD',
                'office' => 'SAAD',
                'division_id' => 4,
            ],
            [
                'public_id' => Str::uuid(),
                'code' => 'SC',
                'office' => 'Seed Component',
                'division_id' => 4,
            ],
            //  Integrated Laboratories Division (ILD)
            [
                'public_id' => Str::uuid(),
                'code' => 'ILD',
                'office' => 'Office of the ILD Chief',
                'division_id' => 5,
            ],
            [
                'public_id' => Str::uuid(),
                'code' => 'FCAL',
                'office' => 'Feed Chemical Analysis Laboratory (FCAL)',
                'division_id' => 5,
            ],
            [
                'public_id' => Str::uuid(),
                'code' => 'RADDL',
                'office' => 'Regional Animal Disease Diagnostic Laboratory (RADDL)',
                'division_id' => 5,
            ],
            [
                'public_id' => Str::uuid(),
                'code' => 'RCPC',
                'office' => 'Regional Crop Protection Center (RCPC)',
                'division_id' => 5,
            ],
            [
                'public_id' => Str::uuid(),
                'code' => 'RSL',
                'office' => 'Regional Soils Laboratory (RSL)',
                'division_id' => 5,
            ],
            //  Planning, Monitoring, and Evaluation Division (PMED)
            [
                'public_id' => Str::uuid(),
                'code' => 'PMED',
                'office' => 'Office of the PMED Chief',
                'division_id' => 6,
            ],
            [
                'public_id' => Str::uuid(),
                'code' => 'ICTU',
                'office' => 'Information and Communications Technology Unit (ICTU)',
                'division_id' => 6,
            ],
            [
                'public_id' => Str::uuid(),
                'code' => 'RSBSA',
                'office' => 'Registry System for Basic Sectors in Agriculture (RSBSA)',
                'division_id' => 6,
            ],
            [
                'public_id' => Str::uuid(),
                'code' => 'RAFC',
                'office' => 'Regional Agricultural and Fishery Council (RAFC)',
                'division_id' => 6,
            ],
            // Regional Agricultural Engineering Division (RAED)
            [
                'public_id' => Str::uuid(),
                'code' => 'RAED',
                'office' => 'Office of the Chief, RAED',
                'division_id' => 7,
            ],
            [
                'public_id' => Str::uuid(),
                'code' => 'EPDSS',
                'office' => 'Engineering Plans, Design, and Specification Section (EPDSS)',
                'division_id' => 7,
            ],
            [
                'public_id' => Str::uuid(),
                'code' => 'PPMS',
                'office' => 'Program and Project Management Section (PPMS)',
                'division_id' => 7,
            ],
            [
                'public_id' => Str::uuid(),
                'code' => 'SRES',
                'office' => 'Standard, Regulation and Enforcement Section (SRES)',
                'division_id' => 7,
            ],
            //  Regulatory Division
            [
                'public_id' => Str::uuid(),
                'code' => 'RLS',
                'office' => 'Registration and Licensing Section',
                'division_id' => 8,
            ],
            [
                'public_id' => Str::uuid(),
                'code' => 'QCIS',
                'office' => 'Quality Control, and Inspection Section',
                'division_id' => 8,
            ],
            // Research Division
            [
                'public_id' => Str::uuid(),
                'code' => 'R(Pool)',
                'office' => 'Research Pool',
                'division_id' => 9,
            ],
            [
                'public_id' => Str::uuid(),
                'code' => 'RP Botolan, Zambales',
                'office' => 'Research Outreach Station (ROS) Botolan, Zambales',
                'division_id' => 9,
            ],
            [
                'public_id' => Str::uuid(),
                'code' => 'RP Magalang, Pampanga',
                'office' => 'Research Outreach Station (ROS) Magalang, Pampanga',
                'division_id' => 9,
            ],
            [
                'public_id' => Str::uuid(),
                'code' => 'RP Marcelino, Zambalesa',
                'office' => 'Research Outreach Station (ROS) San Marcelino, Zambalesa',
                'division_id' => 9,
            ],
            [
                'public_id' => Str::uuid(),
                'code' => 'RP Tarlac',
                'office' => 'Research Outreach Station (ROS) Tarlac City',
                'division_id' => 9,
            ],
            // No Division
            [
                'public_id' => Str::uuid(),
                'code' => 'RPCO',
                'office' => 'RPCO',
                'division_id' => 10,
            ],
            [
                'public_id' => Str::uuid(),
                'code' => 'PSO',
                'office' => 'PSO',
                'division_id' => 10,
            ],

        ]);
    }
}


