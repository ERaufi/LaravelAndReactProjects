import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import { API_BASE_URL } from '../../globals';

const StackedBarChart = () => {
    const [chartData, setChartData] = useState({
        labels: [],
        data: [],
    });

    const fetchData = async () => {
        const response = await fetch(API_BASE_URL + '/charts/stackbar-chart');
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
                        data: chartData.data.map(item => item.buy),
                        backgroundColor: 'rgba(75, 192, 192, 0.6)',
                    },
                    {
                        label: 'Sell',
                        data: chartData.data.map(item => item.sell),
                        backgroundColor: 'rgba(255, 99, 132, 0.6)',
                    },
                    {
                        label: 'Return',
                        data: chartData.data.map(item => item.return),
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
        <div className="flex items-center justify-center h-screen">
            <div className="card">
                <div className="card-header">
                    <h3>Stacked Bar Chart</h3>
                </div>
                <div className="card-body">
                    <canvas id="stackedBarChart"></canvas>
                </div>
            </div>
        </div>
    );
};

export default StackedBarChart;
