import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';

const DynamicSelect = () => {
    const [inputValue, setInputValue] = useState('');
    const [options, setOptions] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    // Fetch data from the server
    const fetchData = async (inputValue, page) => {
        setLoading(true);
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/countries/get', {
                params: {
                    q: inputValue,
                    page: page
                }
            });

            setOptions(prevOptions => page === 1
                ? response.data.options
                : [...prevOptions, ...response.data.options]);

            setHasMore(response.data.hasMore);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    // Handle input changes (for filtering)
    const handleInputChange = (newValue) => {
        setInputValue(newValue);
        setPage(1);
        fetchData(newValue, 1);
    };

    // Load more data when the user scrolls down
    const loadMoreOptions = () => {
        if (!loading && hasMore) {
            setPage(prevPage => {
                const nextPage = prevPage + 1;
                fetchData(inputValue, nextPage);
                return nextPage;
            });
        }
    };

    useEffect(() => {
        fetchData('', 1); // Initial fetch
    }, []);

    return (
        <div>
            <p>Select Or Search for A Country</p>
            <Select
                inputValue={inputValue}
                onInputChange={handleInputChange}
                options={options.map(option => ({ label: option.name, value: option.id }))}
                isLoading={loading}
                onMenuScrollToBottom={loadMoreOptions}  // Infinite scroll trigger
                isClearable
                placeholder="Search and select an option"
            />
        </div>

    );
};

export default DynamicSelect;
