<?php

namespace App\Http\Controllers;

use App\Models\ProductTransactions;
use Illuminate\Http\Request;

class ProductTransactionsController extends Controller
{
    //

    public function barChart()
    {
        $pendingCount = ProductTransactions::where('status', 'pending')->count();
        $completedCount = ProductTransactions::where('status', 'completed')->count();
        $canceledCount = ProductTransactions::where('status', 'canceled')->count();

        return response()->json([
            'pending' => $pendingCount,
            'completed' => $completedCount,
            'canceled' => $canceledCount,
        ]);
    }

    public function donutChart()
    {
        // Count the number of transactions for each type
        $transactionData = ProductTransactions::selectRaw('transaction_type, COUNT(*) as count')
            ->groupBy('transaction_type')
            ->get()
            ->keyBy('transaction_type'); // Key the collection by transaction_type

        // Prepare the response data
        $response = [
            'buy' => $transactionData->get('buy')->count ?? 0,
            'sell' => $transactionData->get('sell')->count ?? 0,
            'return' => $transactionData->get('return')->count ?? 0,
        ];

        return response()->json($response); // Return the response as JSON
    }
}
