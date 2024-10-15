import React, { useState } from 'react';
import UserAPIService from '../../../../../../services/user_service';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

export const Step1 = ({ productId, size }) => {
    const [formData, setFormData] = useState({
        email: "",
        mobileno: "",
        address: ""
    });
    const userId = localStorage.getItem("userId");
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { mobileno, address } = formData; 

        try {
            // Check if productId exists (i.e., product is in modal)
            if (productId) {
                // If product exists, proceed with buyNow API call
                await UserAPIService.buyNow({ productId, size, address, mobileno, userId });
                toast.success("Order placed successfully");
            } else {
                // If product does not exist, place order via placeCartOrder API
                await UserAPIService.placeCartOrder({ address, mobileno, userId });
                toast.success("Cart order placed successfully");
            }
            reset();
            navigate("/");
        } catch (error) {
            console.error("Error placing order:", error);
            toast.error("Error placing order. Please try again.");
        }
    };

    const reset = () => {
        setFormData({
            email: "",
            mobileno: "",
            address: ""
        });
    };

    return (
        <div>
            <h4>Personal Information</h4>
            <form className="form" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="col-md-12">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="col-md-12"
                        value={formData.email}
                        onChange={handleChange}
                        required // Optional: Require email input
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="mobileno" className="col-md-12">Mobile Number</label>
                    <input
                        type="tel"
                        name="mobileno"
                        id="mobileno"
                        className="col-md-12"
                        value={formData.mobileno}
                        onChange={handleChange}
                        required // Optional: Require mobile number input
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="address" className="col-md-12">Address</label>
                    <textarea
                        name="address"
                        id="address"
                        className="col-md-12"
                        style={{ height: '40px' }}
                        value={formData.address}
                        onChange={handleChange}
                        required // Optional: Require address input
                    ></textarea>
                </div>

                <button type="submit" className="form_btn w-100">Next</button>
            </form>
        </div>
    );
};
