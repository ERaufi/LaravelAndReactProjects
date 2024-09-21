<?php

use App\Http\Controllers\CountriesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');



Route::prefix('countries')->controller(CountriesController::class)->group(function () {
    Route::get('get', 'get');
});
