import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const AdminSignin = () => {

    return (
        <div className='container  d-flex justify-content-center align-items-center vh-100 '>
            <div className="col-md-5 border p-5 border-dark">
            <form >
                <p className='text-center'>Become a member — don’t miss out on deals, offers, discounts and bonus vouchers.</p>
                <div className="mb-3">
                    <label htmlFor="email" className="col-md-12">
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
                    <label htmlFor="password" className="col-md-12">
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
               
                <button type='submit' className='form_btn w-100 mt-2'>
                    Sign in
                </button>
              
            </form>
        </div>
        </div>
    );
};

