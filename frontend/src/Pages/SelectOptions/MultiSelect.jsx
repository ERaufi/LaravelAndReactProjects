import React, { useState, useEffect } from 'react';
import Multiselect from 'multiselect-react-dropdown';
import axios from 'axios';
import { API_BASE_URL } from '../../globals';

const MultiCountrySelect = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountries, setSelectedCountries] = useState([]);

    // Fetch countries when the component loads
    useEffect(() => {
        axios.get(API_BASE_URL + '/countries/all')
            .then(response => {
                setCountries(response.data);
            })
            .catch(error => {
                console.error('Error fetching countries:', error);
            });
    }, []);

    // Handle selected countries
    const handleSelectedCountries = (selectedList, selectedItem) => {
        setSelectedCountries(selectedList);
    };

    const handleRemoveCountry = (selectedList, removedItem) => {
        setSelectedCountries(selectedList);
    };

    return (

        <div className="card">
            <div className="card-header">
                <p>React Multi Select</p>
            </div>
            <div className="card-body">
                <Multiselect
                    options={countries} // Options to display in the dropdown
                    selectedValues={selectedCountries} // Preselected values
                    onSelect={handleSelectedCountries} // Function to run on select
                    onRemove={handleRemoveCountry} // Function to run on remove
                    displayValue="name" // Property name to display in the dropdown (country name)
                    placeholder="Select countries"
                    style={{
                        chips: { background: '#3498db' }, // Custom styling for selected items
                        searchBox: { border: '1px solid #ccc', 'border-radius': '4px' }
                    }}
                />
                {/* Display the selected countries */}
                <div>
                    <h3>Selected Countries:</h3>
                    <ul>
                        {selectedCountries.map(country => (
                            <li key={country.code}>{country.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MultiCountrySelect;
