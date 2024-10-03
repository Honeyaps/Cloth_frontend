import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './adminSignin.css';

export const AdminSignin = () => {

    return (
        <div className='container-fluid d-flex align-items-center vh-100 admin_bg'>
            <div className="col-md-4 border px-5 py-4 mx-auto border-light admin_formdiv">
            <form>
                <p className='text-center text-white'>Admin — Manage products, orders, and user settings securely</p>
                <div className="mb-3">
                    <label htmlFor="email" className="col-md-12 text-white">
                        Email <span className='text-danger'>*</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        className="col-md-12"
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
                        className="col-md-12"
                        id="password"
                        required
                    />
                </div>
               
                <button type='submit' className='form_btn w-100 mt-2 bg-black'>
                    Sign in
                </button>

                <p className='text-center text-white mt-3'>For any queries, please contact us at: +91 78149-98055</p>
              
            </form>
        </div>
        </div>
    );
};

