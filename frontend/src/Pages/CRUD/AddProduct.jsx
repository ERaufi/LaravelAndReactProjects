import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../globals';

const AddProduct = () => {
    const [formData, setFormData] = useState({
        name: '',
        quantity: '',
        buyingPrice: '',
        sellingPrice: '',
        description: '',
        weight: '',
    });
    const [image, setImage] = useState(null);  // State to store the image file

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle image file change
    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create FormData to send both text data and image
        const formDataToSend = new FormData();
        Object.keys(formData).forEach(key => {
            formDataToSend.append(key, formData[key]);
        });
        if (image) {
            formDataToSend.append('image', image);  // Append image file
        }

        try {
            const response = await axios.post(API_BASE_URL + '/products/add', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('Product added successfully');
            setErrors({});
        } catch (error) {
            if (error.response && error.response.status === 422) {
                setErrors(error.response.data.errors);
            } else {
                console.error('Error adding product', error);
            }
        }
    };

    return (
        <div className="card">
            <div className="card-header">
                <h2>Add New Product</h2>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className='col-md-3'>
                            <label>Name:</label>
                            <input
                                className="form-control"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && <span className="text-danger">{errors.name[0]}</span>}
                        </div>
                        <div className='col-md-3'>
                            <label>Quantity:</label>
                            <input
                                className="form-control"
                                type="number"
                                name="quantity"
                                value={formData.quantity}
                                onChange={handleChange}
                            />
                            {errors.quantity && <span className="text-danger">{errors.quantity[0]}</span>}
                        </div>
                        <div className='col-md-3'>
                            <label>Buying Price:</label>
                            <input
                                className="form-control"
                                type="number"
                                name="buyingPrice"
                                value={formData.buyingPrice}
                                onChange={handleChange}
                            />
                            {errors.buyingPrice && <span className="text-danger">{errors.buyingPrice[0]}</span>}
                        </div>
                        <div className='col-md-3'>
                            <label>Selling Price:</label>
                            <input
                                className="form-control"
                                type="number"
                                name="sellingPrice"
                                value={formData.sellingPrice}
                                onChange={handleChange}
                            />
                            {errors.sellingPrice && <span className="text-danger">{errors.sellingPrice[0]}</span>}
                        </div>
                        <div className='col-md-3'>
                            <label>Description:</label>
                            <textarea
                                className='form-control'
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                            ></textarea>
                            {errors.description && <span className="text-danger">{errors.description[0]}</span>}
                        </div>
                        <div className='col-md-3'>
                            <label>Weight:</label>
                            <input
                                className="form-control mb-3"
                                type="number"
                                name="weight"
                                value={formData.weight}
                                onChange={handleChange}
                            />
                            {errors.weight && <span className="text-danger">{errors.weight[0]}</span>}
                        </div>
                        <div className='col-md-3'>
                            <label>Image:</label>
                            <input
                                className="form-control mb-3"
                                type="file"
                                name="image"
                                onChange={handleImageChange}  // Call handleImageChange when an image is selected
                            />
                            {errors.image && <span className="text-danger">{errors.image[0]}</span>}
                        </div>
                    </div>
                    <button type="submit" className='btn btn-success mt-3'>Add Product</button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
