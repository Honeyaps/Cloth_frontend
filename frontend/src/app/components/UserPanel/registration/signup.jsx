import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserAPIService from '../../../services/user_service';


const MyModal = ({ show, handleClose, handleOpenOTP, formData, onFormDataUpdate  }) => {
  
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };
    onFormDataUpdate(updatedFormData); 
  };

  const validation = () => {
    const { email, username, password, confirmPassword } = formData;
    if (!email || !username || !password || !confirmPassword) {
      setError('All fields are required');
      return false;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return false;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setSuccessMessage(null);

    if (!validation()) {
      return;
    }

    try {
      const response = await UserAPIService.generateOtp({ email: formData.email });
      setSuccessMessage(response.data.message);
      handleOpenOTP();
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              name="username"
              className="form-control"
              id="username"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password" 
              name="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleOnChange}
              required
            />
          </div>

          {error && <p className="text-danger">{error}</p>}
          {successMessage && <p className="text-success">{successMessage}</p>}

          <Button type="submit" className="btn btn-primary w-100">
            Sign Up
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default MyModal;
