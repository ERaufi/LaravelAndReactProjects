<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            'name' => $this->faker->word(),
            'quantity' => $this->faker->numberBetween(1, 100),
            'buyingPrice' => $this->faker->numberBetween(100, 10000),
            'sellingPrice' => $this->faker->numberBetween(100, 10000),
            'description' => $this->faker->sentence(),
            'image_path' => $this->faker->imageUrl(),
            'weight' => $this->faker->numberBetween(1, 1000),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
