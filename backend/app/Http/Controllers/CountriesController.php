<?php

namespace App\Http\Controllers;

use App\Models\Cities;
use App\Models\Countries;
use Illuminate\Http\Request;

class CountriesController extends Controller
{
    //

    public function get(Request $request)
    {
        $page = $request->input('page', 1);

        $options = Countries::where('name', 'like', '%' . $request->q . '%')
            ->paginate(10, ['*'], 'page', $request->page);

        return response()->json([
            'options' => $options->items(),
            'hasMore' => $options->hasMorePages()
        ]);
    }


    public function getCountries()
    {
        $countries = Countries::orderBy('order_number')->get();
        return response()->json($countries);
    }

    public function getCities($countryCode)
    {
        $cities = Cities::where('country_code', $countryCode)->get();
        return response()->json($cities);
    }
}
