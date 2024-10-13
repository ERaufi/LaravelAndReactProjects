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
        // Query the ProductTransactions model to select the date, transaction type, and the total quantity for each type
        $transactions = ProductTransactions::selectRaw('DATE(created_at) as date, transaction_type, SUM(quantity) as total_quantity')
            // Group the results by date and transaction type
            ->groupBy('date', 'transaction_type')
            // Execute the query and get the results
            ->get();

        // Return the results as a JSON response
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
        $transactions = ProductTransactions::select('transaction_type', 'quantity', 'price', 'created_at')
            ->get()
            ->groupBy(function ($item) {
                return \Carbon\Carbon::parse($item->created_at)->format('Y-m-d'); // Group by date
            });

        // Prepare data for stacked bar chart
        $labels = [];
        $buyData = [];
        $sellData = [];
        $returnData = [];

        foreach ($transactions as $date => $items) {
            $labels[] = $date;
            $buyData[] = $items->where('transaction_type', 'buy')->sum('quantity');
            $sellData[] = $items->where('transaction_type', 'sell')->sum('quantity');
            $returnData[] = $items->where('transaction_type', 'return')->sum('quantity');
        }

        return response()->json([
            'labels' => $labels,
            'data' => [
                'buy' => $buyData,
                'sell' => $sellData,
                'return' => $returnData,
            ],
        ]);
    }
}
