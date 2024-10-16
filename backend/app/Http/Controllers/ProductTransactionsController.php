<?php

namespace App\Http\Controllers;

use App\Models\ProductTransactions;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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

    public function lineChart()
    {
        $transactions = ProductTransactions::query()
            ->selectRaw('DATE(created_at) as date, transaction_type, SUM(quantity) as total_quantity')
            ->groupBy('date', 'transaction_type')
            ->get();

        return response()->json($transactions);
    }

    public function pieChart()
    {
        $transactions = ProductTransactions::select('transaction_type', DB::raw('SUM(quantity) as total_quantity'))
            ->groupBy('transaction_type')
            ->get();

        return response()->json($transactions);
    }

    public function stackBarChart()
    {
        $transactions = ProductTransactions::query()
            ->selectRaw('DATE(created_at) as date, transaction_type, SUM(quantity) as total_quantity')
            ->groupBy('date', 'transaction_type')
            ->get();

        $data = $transactions->groupBy('date')->map(fn($items) => [
            'buy' => $items->where('transaction_type', 'buy')->sum('total_quantity'),
            'sell' => $items->where('transaction_type', 'sell')->sum('total_quantity'),
            'return' => $items->where('transaction_type', 'return')->sum('total_quantity'),
        ]);

        return response()->json([
            'labels' => $data->keys(),
            'data' => $data->values(),
        ]);
    }
}
