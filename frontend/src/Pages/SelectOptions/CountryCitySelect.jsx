import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CountryCitySelect = () => {
    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');

    // Fetch countries when the component loads
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/countries/all')
            .then(response => {
                setCountries(response.data);
            })
            .catch(error => {
                console.error('Error fetching countries:', error);
            });
    }, []);

    // Fetch cities when a country is selected
    useEffect(() => {
        if (selectedCountry) {
            axios.get(`http://127.0.0.1:8000/api/countries/cities/${selectedCountry}`)
                .then(response => {
                    setCities(response.data);
                })
                .catch(error => {
                    console.error('Error fetching cities:', error);
                });
        } else {
            setCities([]);
        }
    }, [selectedCountry]);

    return (
        <div className="card">
            <div className="card-header">
                <p>Country Cities Select</p>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="country-select">Country:</label>
                        <select
                            className='form-control'
                            id="country-select"
                            value={selectedCountry}
                            onChange={e => setSelectedCountry(e.target.value)}
                        >
                            <option value="">Select a country</option>
                            {countries.map(country => (
                                <option key={country.code} value={country.code}>
                                    {country.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="city-select">City:</label>
                        <select id="city-select" className='form-control'>
                            <option value="">Select a city</option>
                            {cities.map(city => (
                                <option key={city.id} value={city.name}>
                                    {city.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </div>




    );
};

export default CountryCitySelect;
