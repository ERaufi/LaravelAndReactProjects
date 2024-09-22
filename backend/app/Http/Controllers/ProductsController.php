<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductsRequest;
use App\Models\Products;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    //

    public function index()
    {
        $products = Products::all();
        return response()->json($products);
    }

    public function store(ProductsRequest $request)
    {
        foreach ($request['products'] as $productData) {
            $product = new Products();
            $product->name = $productData['name'];
            $product->quantity = $productData['quantity'];
            $product->buyingPrice = $productData['buyingPrice'];
            $product->sellingPrice = $productData['sellingPrice'];
            $product->description = $productData['description'] ?? null;
            $product->weight = $productData['weight'] ?? null;

            // Handle file upload
            if (isset($productData['image'])) {
                $path = $productData['image']->store('images/products', 'public'); // Store in public disk
                $product->image_path = $path; // Save the file path
            }

            $product->save();
        }

        return response()->json(['message' => 'Products added successfully']);
    }
}
