// src/components/ProductTransactionPieChart.js
import React, { useEffect, useState } from 'react';  // Import React and hooks for managing state and lifecycle
import Chart from 'chart.js/auto';  // Import Chart.js for creating charts, automatically includes necessary components
import axios from 'axios';  // Import axios for making HTTP requests

const PieChart = () => {  // Define a functional component named PieChart
    const [data, setData] = useState({ labels: [], values: [] });  // Initialize state to store chart data with labels and values

    useEffect(() => {  // Use useEffect hook to perform side effects after component mounts
        const fetchData = async () => {  // Define an asynchronous function to fetch data
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/charts/pie-chart');  // Fetch data from the API endpoint using Axios
                const transactions = response.data;  // Get the data from the response

                // Map over transactions to extract labels and values for the pie chart
                const labels = transactions.map(transaction => transaction.transaction_type);  // Extract transaction types for labels
                const values = transactions.map(transaction => transaction.total_quantity);  // Extract total quantities for values

                setData({ labels, values });  // Update state with the fetched labels and values
            } catch (error) {
                console.error('Error fetching data:', error);  // Handle errors by logging them
            }
        };

        fetchData();  // Call the fetchData function to initiate data fetching
    }, []);  // Empty dependency array means this effect runs only once when the component mounts

    useEffect(() => {  // Another useEffect hook that runs when the data state updates
        const ctx = document.getElementById('myPieChart');  // Get the canvas element by its ID for chart rendering
        const myPieChart = new Chart(ctx, {  // Create a new Chart instance
            type: 'pie',  // Set the chart type to pie
            data: {  // Define the data for the chart
                labels: data.labels,  // Use the labels from state
                datasets: [{  // Define datasets for the pie chart
                    data: data.values,  // Use the values from state
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],  // Set background colors for the slices
                }],
            },
            options: {  // Define options for the chart
                plugins: {
                    legend: { position: 'top' },  // Position the legend at the top of the chart
                },
            },
        });
        return () => {  // Cleanup function to run on component unmount
            myPieChart.destroy();  // Destroy the chart instance to prevent memory leaks
        };
    }, [data]);  // This effect runs every time the data state changes

    return (  // Render the component UI
        <div className="flex items-center justify-center h-screen">
            <div className="card">
                <div className="card-header">
                    <h3>Pie Chart</h3>
                </div>
                <div className="card-body d-flex justify-content-center">
                    <div className="chart-container">
                        <canvas id="myPieChart"></canvas>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PieChart;  // Export the PieChart component for use in other files
