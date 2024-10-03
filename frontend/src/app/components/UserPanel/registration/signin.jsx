import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserAPIService from '../../../services/user_service';

export const SigninModal = ({  show, handleClose, openSignupModal }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await UserAPIService.signInUser(formData);
      
      const token = response.data.token;
      if (token) {
        localStorage.setItem('token', token);
      
      setSuccessMessage(response.data.message);
      handleClose();
      }
      else {
        setError('Token not found in response');
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} className='modal'>
      <Modal.Header closeButton className='border-0'>
        <Modal.Title className='modal_heading mx-4'>Sign in</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit} className='px-3 py-2'>
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
              value={formData.email}
              onChange={handleOnChange}
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
              value={formData.password}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className='mb-3 text-end'>
            <a href='/request-resetpassword'>Forgot password?</a>
          </div>

          {error && <p className="text-danger">{error}</p>}
          {successMessage && <p className="text-success">{successMessage}</p>}

          <button type='submit' className='form_btn w-100 mt-2'>
            Sign in
          </button>
          <button   
            type="button" 
            onClick={openSignupModal} 
            className='form_btn w-100 mt-2 bg-transparent text-black border border-black'
           >
            Become a member
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

