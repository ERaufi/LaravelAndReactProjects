<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'products.*.name' => 'required|string|max:255',
            'products.*.quantity' => 'required|integer',
            'products.*.buyingPrice' => 'required|integer',
            'products.*.sellingPrice' => 'required|integer',
            'products.*.description' => 'nullable|string',
            'products.*.image' => 'nullable|image|mimes:jpg,png,jpeg,gif|max:2048',
            'products.*.weight' => 'nullable|integer',
        ];
    }

    public function messages()
    {
        return [
            'products.*.name.required' => 'The product name is required.',
            'products.*.quantity.required' => 'The product quantity is required.',
            'products.*.buyingPrice.required' => 'The buying price is required.',
            'products.*.sellingPrice.required' => 'The selling price is required.',
            'products.*.image.image' => 'The uploaded file must be an image.',
            'products.*.image.mimes' => 'The image must be a file of type: jpg, png, jpeg, gif.',
            'products.*.image.max' => 'The image may not be greater than 2MB.',
        ];
    }
}
