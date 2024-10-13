import React, { useEffect, useState } from 'react';
import { Chart } from 'chart.js';

const StackedBarChart = () => {
    const [chartData, setChartData] = useState({
        labels: [],
        data: {
            buy: [],
            sell: [],
            return: [],
        },
    });

    const fetchData = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/charts/stackbar-chart');
        const data = await response.json();
        setChartData(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const ctx = document.getElementById('stackedBarChart').getContext('2d');

        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: chartData.labels,
                datasets: [
                    {
                        label: 'Buy',
                        data: chartData.data.buy,
                        backgroundColor: 'rgba(75, 192, 192, 0.6)',
                    },
                    {
                        label: 'Sell',
                        data: chartData.data.sell,
                        backgroundColor: 'rgba(255, 99, 132, 0.6)',
                    },
                    {
                        label: 'Return',
                        data: chartData.data.return,
                        backgroundColor: 'rgba(54, 162, 235, 0.6)',
                    },
                ],
            },
            options: {
                scales: {
                    x: {
                        stacked: true,
                    },
                    y: {
                        stacked: true,
                    },
                },
            },
        });

        return () => {
            myChart.destroy();
        };
    }, [chartData]);

    return (
        <div className="flex items-center justify-center h-screen"> {/* Center the chart on the screen */}
            <div className="card"> {/* Create a card for styling */}
                <div className="card-header"> {/* Header of the card */}
                    <h3>Line Chart</h3> {/* Title of the chart */}
                </div>
                <div className="card-body"> {/* Body of the card */}
                    {/* Render the canvas if there are labels, otherwise show loading message */}
                    <canvas id="stackedBarChart"></canvas>
                </div>
            </div>
        </div>
    );
};

export default StackedBarChart;
