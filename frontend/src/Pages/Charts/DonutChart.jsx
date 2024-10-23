import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js
import axios from 'axios'; // Import axios for making HTTP requests
import { API_BASE_URL } from '../../globals';

const DonutChart = () => {
    const chartRef = useRef(null); // Ref to access the canvas element for the chart

    // Function to fetch transaction data
    const fetchTransactionData = async () => {
        try {
            // Make a GET request to the API endpoint to fetch transaction data
            const response = await axios.get(API_BASE_URL + '/charts/donut-chart');
            createChart(response.data); // Create a chart with the fetched data
        } catch (error) {
            console.error('Error fetching transaction data:', error); // Log any errors
        }
    };

    // Function to create the donut chart
    const createChart = (data) => {
        if (chartRef.current) {
            // Destroy the previous chart instance if it exists
            const oldChart = Chart.getChart(chartRef.current);
            if (oldChart) oldChart.destroy();
        }

        // Create a new chart instance
        new Chart(chartRef.current, {
            type: 'doughnut', // Set the type of chart to 'doughnut'
            data: {
                labels: ['Buy', 'Sell', 'Return'], // Define the labels for the donut chart
                datasets: [{
                    label: 'Transaction Types', // Label for the dataset
                    data: [data.buy, data.sell, data.return], // Data points for each label
                    backgroundColor: ['#ffcc00', '#00cc66', '#ff3333'], // Colors for each segment of the donut chart
                }],
            },
            options: {
                responsive: true, // Make the chart responsive to window size
                plugins: {
                    legend: { display: true }, // Display the legend on the chart
                    title: {
                        display: true, // Display the title on the chart
                        text: 'Transaction Types Distribution', // Set the title text
                    },
                },
            },
        });
    };

    useEffect(() => {
        fetchTransactionData(); // Call the function to fetch transaction data
    }, []); // Empty dependency array means this runs only once when the component mounts

    return (
        <div className="flex items-center justify-center h-screen"> {/* Centering the card vertically and horizontally */}
            <div className="card">
                <div className="card-header">
                    <h3>Donut Chart</h3> {/* Title for the chart */}
                </div>
                <div className="card-body d-flex justify-content-center">
                    <div className="chart-container" style={{ position: 'relative', height: '400px', width: '400px' }}> {/* Set width to maintain chart proportions */}
                        <canvas ref={chartRef}></canvas> {/* Canvas element where the chart will be rendered */}
                    </div>
                </div>
            </div>
        </div>
    );

};

export default DonutChart; // Export the DonutChart component for use in other parts of the application
