// src/components/ProductForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../globals';

export default function ProductForm() {
    const fields =
    {
        name: '',
        quantity: '',
        buyingPrice: '',
        sellingPrice: '',
        description: '',
        image: null,
        weight: ''
    };

    const [productFields, setProductFields] = useState([fields]);

    const handleAddRow = () => {
        setProductFields([
            ...productFields,
            fields
        ]);
    };

    const handleRemoveRow = (index) => {
        const rows = [...productFields];
        rows.splice(index, 1);
        setProductFields(rows);
    };

    const handleInputChange = (index, event) => {
        const { name, value, type, files } = event.target;
        const rows = [...productFields];
        if (type === 'file') {
            rows[index][name] = files[0]; // Store the file
        } else {
            rows[index][name] = value;
        }
        setProductFields(rows);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        productFields.forEach((product, index) => {
            formData.append(`products[${index}][name]`, product.name);
            formData.append(`products[${index}][quantity]`, product.quantity);
            formData.append(`products[${index}][buyingPrice]`, product.buyingPrice);
            formData.append(`products[${index}][sellingPrice]`, product.sellingPrice);
            formData.append(`products[${index}][description]`, product.description);
            formData.append(`products[${index}][weight]`, product.weight);
            if (product.image) {
                formData.append(`products[${index}][image]`, product.image); // Append the file
            }
        });

        try {
            const response = await axios.post(API_BASE_URL + '/products/store', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Set the correct content type
                },
            });
            console.log(response.data);
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    };

    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-header">
                    <h3>Add Products</h3>

                </div>
                <div className="card-body">
                    <div className="mb-3">
                        <button type="button" className="btn btn-primary" onClick={handleAddRow}>
                            Add Product
                        </button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        {productFields.map((productField, index) => (
                            <div className="row mb-3" key={index}>
                                <div className="col-md-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Name"
                                        name="name"
                                        value={productField.name}
                                        onChange={(event) => handleInputChange(index, event)}
                                        required
                                    />
                                </div>
                                <div className="col-md-1">
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Qty"
                                        name="quantity"
                                        value={productField.quantity}
                                        onChange={(event) => handleInputChange(index, event)}
                                        required
                                    />
                                </div>
                                <div className="col-md-2">
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Buying Price"
                                        name="buyingPrice"
                                        value={productField.buyingPrice}
                                        onChange={(event) => handleInputChange(index, event)}
                                        required
                                    />
                                </div>
                                <div className="col-md-2">
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Selling Price"
                                        name="sellingPrice"
                                        value={productField.sellingPrice}
                                        onChange={(event) => handleInputChange(index, event)}
                                        required
                                    />
                                </div>
                                <div className="col-md-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Description"
                                        name="description"
                                        value={productField.description}
                                        onChange={(event) => handleInputChange(index, event)}
                                    />
                                </div>
                                <div className="col-md-1">
                                    <input
                                        type="file"
                                        className="form-control"
                                        placeholder="Image"
                                        name="image"
                                        onChange={(event) => handleInputChange(index, event)}
                                    />
                                </div>
                                <div className="col-md-1">
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Weight"
                                        name="weight"
                                        value={productField.weight}
                                        onChange={(event) => handleInputChange(index, event)}
                                    />
                                </div>
                                <div className="col-md-1">
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => handleRemoveRow(index)}
                                        disabled={productFields.length === 1}
                                    >
                                        X
                                    </button>
                                </div>
                            </div>
                        ))}
                        <button type="submit" className="btn btn-success ml-2">Submit</button>
                    </form>
                </div>
            </div>

        </div>
    );
};