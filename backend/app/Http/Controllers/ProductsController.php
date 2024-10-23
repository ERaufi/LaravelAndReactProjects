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

    public function getWithPagination(Request $request)
    {
        $query = Products::query();

        // Filtering
        if ($request->has('search') && $request->search) {
            $search = $request->search;
            $query->where('name', 'like', "%{$search}%")
                ->orWhere('description', 'like', "%{$search}%");
        }

        // Sorting
        $sortField = $request->get('sort_field', 'name');
        $sortOrder = $request->get('sort_order', 'asc');
        $query->orderBy($sortField, $sortOrder);

        // Pagination
        $perPage = $request->get('per_page', 10);
        $products = $query->paginate($perPage);

        return response()->json($products);
    }

    public function addMany(Request $request)
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

    public function store(ProductsRequest $request)
    {
        $product = new Products();
        $product->name = $request->name;
        $product->quantity = $request->quantity;
        $product->buyingPrice = $request->buyingPrice;
        $product->sellingPrice = $request->sellingPrice;
        $product->description = $request->description;
        $product->weight = $request->weight;

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('images/products', 'public');
            $product->image_path = $imagePath; // Save the image path to the database
        }

        $product->save();
    }
}
