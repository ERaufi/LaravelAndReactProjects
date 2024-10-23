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
            'name' => 'required|string|max:255',
            'quantity' => 'required|integer',
            'buyingPrice' => 'required|integer',
            'sellingPrice' => 'required|integer',
            'description' => 'nullable|string',
            'weight' => 'nullable|integer',
            'image' => 'required|image|mimes:jpg,jpeg,png|max:2048',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'The product name is required.',
            'quantity.required' => 'The product quantity is required.',
            'buyingPrice.required' => 'The buying price is required.',
            'sellingPrice.required' => 'The selling price is required.',
        ];
    }
}
