<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            [
                'name' => 'Juan Dela Cruz',
                'email' => 'juan.delacruz@example.com',
                'password' => Hash::make('password'),
            ],
            [
                'name' => 'Maria Santos',
                'email' => 'maria.santos@example.com',
                'password' => Hash::make('password'),
            ],
            [
                'name' => 'Jose Mare Santos',
                'email' => 'josemare.santos@example.com',
                'password' => Hash::make('password'),
            ],
        ];

        foreach ($users as $user) {
            User::updateOrCreate(
                ['email' => $user['email']],
                $user
            );
        }
    }
}
