<?php

use App\Http\Controllers\CountriesController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\ProductTransactionsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::prefix('countries')->controller(CountriesController::class)->group(function () {
    Route::get('get', 'get');
    Route::get('/all', [CountriesController::class, 'getCountries']);
    Route::get('/cities/{countryCode}', [CountriesController::class, 'getCities']);
});


Route::prefix('products')->controller(ProductsController::class)->group(function () {
    Route::get('index', 'index');
    Route::get('get-with-pagination', 'getWithPagination');
    Route::post('store', 'addMany');
    Route::post('add', 'store');
});

Route::prefix('charts')->group(function () {
    Route::get('bar-chart', [ProductTransactionsController::class, 'barChart']);
    Route::get('donut-chart', [ProductTransactionsController::class, 'donutChart']);
    Route::get('line-chart', [ProductTransactionsController::class, 'lineChart']);
    Route::get('pie-chart', [ProductTransactionsController::class, 'pieChart']);
    Route::get('stackbar-chart', [ProductTransactionsController::class, 'stackBarChart']);
});
