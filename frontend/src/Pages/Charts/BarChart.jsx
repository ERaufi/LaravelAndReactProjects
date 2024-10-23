import React, { useEffect, useRef } from 'react'; // Import necessary React hooks
import Chart from 'chart.js/auto'; // Import Chart.js for rendering charts
import axios from 'axios'; // Import axios for making HTTP requests
import { API_BASE_URL } from '../../globals';

// Define the BarChart component
const BarChart = () => {
    const chartRef = useRef(null); // Create a ref to access the canvas element for the chart
    const chartInstanceRef = useRef(null); // Create a ref to keep track of the current chart instance

    // Function to fetch transaction data from the API
    const fetchTransactionData = async () => {
        try {
            // Make a GET request to the API endpoint to fetch transaction data
            const response = await axios.get(API_BASE_URL + '/charts/bar-chart');
            // Create a chart with the fetched data
            createChart(response.data);
        } catch (error) {
            // Log any errors that occur during the fetch operation
            console.error('Error fetching transaction data:', error);
            return null; // Return null in case of an error
        }
    };

    // Function to create the chart with the provided data
    const createChart = (data) => {
        // Check if there is an existing chart instance
        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy(); // Destroy the previous chart instance to avoid conflicts
        }

        // Create a new chart instance using the Chart.js library
        chartInstanceRef.current = new Chart(chartRef.current, {
            type: 'bar', // Set the type of chart to 'bar'
            data: {
                labels: ['Pending', 'Completed', 'Canceled'], // Define the labels for the x-axis
                datasets: [{ // Define the dataset for the chart
                    label: 'Total Transactions', // Label for the dataset
                    data: [data.pending, data.completed, data.canceled], // Data points for each label
                    backgroundColor: ['#ffcc00', '#00cc66', '#ff3333'], // Colors for each bar in the chart
                }],
            },
            options: {
                responsive: true, // Make the chart responsive to window size
                plugins: {
                    legend: { display: true }, // Display the legend on the chart
                    title: {
                        display: true, // Display the title on the chart
                        text: 'Product Transactions by Status', // Set the title text
                    },
                },
                scales: {
                    x: { ticks: { color: '#333' } }, // Set the color of x-axis ticks
                    y: {
                        ticks: {
                            color: '#333', // Set the color of y-axis ticks
                            callback: (value) => `${value} transactions`, // Format y-axis tick labels
                        },
                    },
                },
            },
        });
    };

    // useEffect hook to fetch data when the component mounts
    useEffect(() => {
        fetchTransactionData(); // Call the function to fetch transaction data
    }, []); // Empty dependency array means this runs only once when the component mounts

    // Render the chart and its container
    return (
        <div className="card">
            <div className="card-header">
                <h3>Bar Chart</h3> {/* Title for the chart */}
            </div>
            <div className="card-body">
                <div className="chart-container" style={{ position: 'relative', height: '400px' }}>
                    <canvas ref={chartRef}></canvas> {/* Canvas element where the chart will be rendered */}
                </div>
            </div>
        </div>
    );
};

// Export the BarChart component for use in other parts of the application
export default BarChart;
