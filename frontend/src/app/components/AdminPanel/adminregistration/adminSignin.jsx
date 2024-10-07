import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './adminSignin.css';
import AdminAPIService from '../../../services/admin_service';
import { useNavigate } from 'react-router-dom';

export const AdminSignin = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const navigate = useNavigate();
    
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await AdminAPIService.signInAdmin(formData);
            const token = response.data.token;
            if (token) {
                localStorage.setItem('admintoken', token);
                setSuccessMessage(response.data.message);
                navigate('/admin-portal');
            } else {
                setError('Token not found in response');
            }
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    return (
        <div className='container-fluid d-flex align-items-center vh-100 admin_bg'>
            <div className="col-md-4 border px-5 py-4 mx-auto border-light admin_formdiv">
            <form onSubmit={handleSubmit}>
                <p className='text-center text-white'>Admin — Manage products, orders, and user settings securely</p>
                <div className="mb-3">
                    <label htmlFor="email" className="col-md-12 text-white">
                        Email <span className='text-danger'>*</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        className="col-md-12"
                        onChange={handleOnChange}
                        value={formData.email}
                        id="email"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="col-md-12 text-white">
                        Password <span className='text-danger'>*</span>
                    </label>
                    <input
                        type="password"
                        name="password"
                        onChange={handleOnChange}
                        value={formData.password}
                        className="col-md-12"
                        id="password"
                        required
                    />
                </div>

                {error && <p className='text-danger'>{error}</p>}
                {successMessage && <p className='text-success'>{successMessage}</p>}
               
                <button type='submit' className='form_btn w-100 mt-2 bg-black'>
                    Sign in
                </button>

                <p className='text-center text-white mt-3'>For any queries, please contact us at: +91 78149-98055</p>
              
            </form>
        </div>
        </div>
    );
};

