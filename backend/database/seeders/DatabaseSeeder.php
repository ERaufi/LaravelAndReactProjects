<?php

namespace Database\Seeders;

use App\Models\Products;
use App\Models\ProductTransactions;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        Products::factory()->count(10)->create(); // Create 10 products

        ProductTransactions::factory()->count(200)->create(); // Create 10 transactions
        // $this->call([
        //     CountriesSeeder::class,
        //     CitiesSeeder::class,

        // ]);
    }
}
