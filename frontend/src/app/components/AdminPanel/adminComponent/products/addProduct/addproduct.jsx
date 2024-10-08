import React, { useState } from 'react';
import { AddConfirmationAlert } from "../../../../../shared/helpers/helper";
import AdminAPIService from '../../../../../services/admin_service';

export const AddProduct = () => {
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [card_pic, setCardPic] = useState(null);
    const [images, setImages] = useState([]);

    const handleInputChange = (e, setter) => setter(e.target.value);
    const handleFileChange = (e, setter) => setter(e.target.files[0]);

    const handleAddProduct = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('productName', productName);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('category', category);
        formData.append('card_pic', card_pic); // Only send card_pic if it's defined

        // Loop through each additional image and append it to FormData
        images.forEach((img, index) => {
            if (img) { // Ensure there's an image to append
                formData.append(`images[${index}]`, img);
            }
        });

        try {
            const response = await AdminAPIService.AddProduct(formData);
            console.log(response);
            AddConfirmationAlert('Product added successfully!');
            // Reset form after successful submission
            setProductName('');
            setDescription('');
            setPrice('');
            setCategory('');
            setCardPic(null);
            setImages([]); // Clear images after submission
        } catch (error) {
            console.error('Error adding product:', error);
            // You might want to show a user-friendly error message
            AddConfirmationAlert('Failed to add product. Please try again.');
        }
    };

    return (
        <div className="container-fluid">
            <div className="row mb-4">
                <div className="col-md-12 card shadow p-3">
                    <h3 className="dashboard-title">Add Product</h3>
                </div>
            </div>

            <div className="row card shadow p-3">
                <div className="col-md-12">
                    <form onSubmit={handleAddProduct}>
                        <div className="mb-3">
                            <label htmlFor="productName" className="col-md-12 text-start">
                                Product Name <span className="text-danger">*</span>
                            </label>
                            <input
                                type="text"
                                className="col-md-12"
                                id="productName"
                                value={productName}
                                onChange={(e) => handleInputChange(e, setProductName)}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="description" className="col-md-12 text-start">
                                Description <span className="text-danger">*</span>
                            </label>
                            <textarea
                                className="col-md-12"
                                id="description"
                                value={description}
                                onChange={(e) => handleInputChange(e, setDescription)}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="price" className="col-md-12 text-start">
                                Price <span className="text-danger">*</span>
                            </label>
                            <input
                                type="number"
                                className="col-md-12"
                                id="price"
                                value={price}
                                onChange={(e) => handleInputChange(e, setPrice)}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="category" className="col-md-12 text-start">
                                Category <span className="text-danger">*</span>
                            </label>
                            <input
                                type="text"
                                className="col-md-12"
                                id="category"
                                value={category}
                                onChange={(e) => handleInputChange(e, setCategory)}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="card_pic" className="col-md-12 text-start">
                                Product Image <span className="text-danger">*</span>
                            </label>
                            <input
                                type="file"
                                className="col-md-12 p-2"
                                id="card_pic"
                                onChange={(e) => handleFileChange(e, setCardPic)}
                                required
                            />
                        </div>

                        <div className="row">
                            {Array(4).fill().map((_, index) => (
                                <div className="mb-3 col-md-6" key={index}>
                                    <label className="col-md-12 text-start">
                                        Additional Image {index + 1} <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="file"
                                        className="col-md-12 p-2"
                                        onChange={(e) => {
                                            const updatedImages = [...images];
                                            updatedImages[index] = e.target.files[0];
                                            setImages(updatedImages);
                                        }}
                                        required
                                    />
                                </div>
                            ))}
                        </div>

                        <button type="submit" className="form_btn mt-2 px-5">
                            Save
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
