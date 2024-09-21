<?php

namespace App\Http\Controllers;

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
}
