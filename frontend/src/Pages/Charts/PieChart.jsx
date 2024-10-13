// src/components/ProductTransactionPieChart.js
import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';  // Automatically imports everything you need

const PieChart = () => {
    const [data, setData] = useState({ labels: [], values: [] });

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://127.0.0.1:8000/api/charts/pie-chart');
            const transactions = await response.json();

            const labels = transactions.map(transaction => transaction.transaction_type);
            const values = transactions.map(transaction => transaction.total_quantity);

            setData({ labels, values });
        };

        fetchData();
    }, []);

    useEffect(() => {
        const ctx = document.getElementById('myPieChart');
        const myPieChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: data.labels,
                datasets: [{
                    data: data.values,
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56',
                    ],
                }],
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                },
            },
        });

        return () => {
            myPieChart.destroy();
        };
    }, [data]);

    return (

        <div className="flex items-center justify-center h-screen"> {/* Centering the card vertically and horizontally */}
            <div className="card">
                <div className="card-header">
                    <h3>Pie Chart</h3> {/* Title for the chart */}
                </div>
                <div className="card-body d-flex justify-content-center">
                    <div className="chart-container" style={{ position: 'relative', height: '400px', width: '400px' }}> {/* Set width to maintain chart proportions */}
                        <canvas id="myPieChart"></canvas>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PieChart;
