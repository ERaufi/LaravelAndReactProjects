import React, { useEffect, useState } from 'react'; // Import React and necessary hooks
import Chart from 'chart.js/auto'; // Automatically imports all necessary components from Chart.js
import axios from 'axios'; // Import axios for making HTTP requests
import { API_BASE_URL } from '../../globals';

const LineChart = () => {
    // Step 1: Create the component
    // State to hold chart data
    const [chartData, setChartData] = useState({ labels: [], datasets: [] });
    // State to hold the chart instance
    const [chartInstance, setChartInstance] = useState(null);

    // Step 3: Fetch data from the server
    useEffect(() => {
        const fetchData = async () => { // Define an asynchronous function to fetch data
            try {
                // Make a GET request to the API to retrieve line chart data
                const { data } = await axios.get(API_BASE_URL + '/charts/line-chart');
                // Initialize an object to hold totals for each date
                const totals = {};

                // Loop through each item in the data array
                data.forEach(item => {
                    // Get the date from the item
                    const date = item.date;
                    // Get the transaction type from the item
                    const transactionType = item.transaction_type;
                    // Convert the total quantity to a number
                    const quantity = Number(item.total_quantity);

                    // If the date doesn't exist in the totals object, create an entry for it
                    if (!totals[date]) {
                        // Initialize buy, sell, and return totals to 0
                        totals[date] = { buy: 0, sell: 0, return: 0 };
                    }

                    // Increment the total for the corresponding transaction type
                    totals[date][transactionType] += quantity;
                });

                // Prepare data for the chart
                // Extract the dates as labels
                const labels = Object.keys(totals);
                // Create an array of buy quantities
                const buyData = labels.map(date => totals[date].buy);
                // Create an array of sell quantities
                const sellData = labels.map(date => totals[date].sell);
                // Create an array of return quantities
                const returnData = labels.map(date => totals[date].return);

                // Set the chart data state
                setChartData({
                    labels, // Set the labels for the chart
                    datasets: [ // Define datasets for the chart
                        { label: 'Buy', data: buyData, borderColor: 'green', fill: false }, // Buy data series
                        { label: 'Sell', data: sellData, borderColor: 'blue', fill: false }, // Sell data series
                        { label: 'Return', data: returnData, borderColor: 'red', fill: false }, // Return data series
                    ],
                });
            } catch (error) {
                // Log an error message if the data fetch fails
                console.error('Error fetching transaction data', error);
            }
        };

        fetchData(); // Call the fetchData function to initiate the data fetch
    }, []); // Empty dependency array means this effect runs only once when the component mounts

    // Step 2: Create the chart
    useEffect(() => {
        // Check if there are labels in the chart data
        if (chartData.labels.length > 0) {
            // Get the 2D rendering context of the canvas
            const ctx = document.getElementById('line-chart').getContext('2d');

            // Destroy the existing chart instance if it exists
            if (chartInstance) {
                chartInstance.destroy(); // Clean up the previous chart instance
            }

            // Create a new chart instance
            const newChartInstance = new Chart(ctx, { // Create a new Chart.js chart
                type: 'line', // Set the chart type to line
                data: chartData, // Use the chart data from state
                options: { // Set chart options
                    scales: {
                        x: { title: { display: true, text: 'Date' } }, // X-axis title
                        y: { title: { display: true, text: 'Quantity' }, beginAtZero: true }, // Y-axis title and start at zero
                    },
                },
            });

            // Save the new chart instance
            setChartInstance(newChartInstance); // Update the state with the new chart instance
        }
    }, [chartData]); // This effect runs when chartData changes

    // Step 4: Return the chart canvas
    return (
        <div className="flex items-center justify-center h-screen"> {/* Center the chart on the screen */}
            <div className="card"> {/* Create a card for styling */}
                <div className="card-header"> {/* Header of the card */}
                    <h3>Line Chart</h3> {/* Title of the chart */}
                </div>
                <div className="card-body"> {/* Body of the card */}
                    {/* Render the canvas if there are labels, otherwise show loading message */}
                    {chartData.labels.length ? <canvas id="line-chart"></canvas> : <div>Loading chart...</div>}
                </div>
            </div>
        </div>
    );
};

export default LineChart; // Export the LineChart component for use in other parts of the application
