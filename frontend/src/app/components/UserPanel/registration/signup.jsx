import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyModal = ({ show, handleClose }) => {
  // State for the email field
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);  // State for handling error
  const [successMessage, setSuccessMessage] = useState(null); // State for success message

  // Handle email input change
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null); // Reset error before submission
    setSuccessMessage(null); // Reset success message before submission

    try {
      const response = await fetch('https://cloth-ecomm-api.vercel.app/v1/user/generateOtp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate OTP. Please try again.');
      }

      const data = await response.json();
      setSuccessMessage('OTP generated successfully. Please check your email!');
      setEmail(''); // Reset email input after success
    } catch (error) {
      setError(error.message || 'An unexpected error occurred.');
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Sign up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          {error && <p className="text-danger">{error}</p>} {/* Display error message */}
          {successMessage && <p className="text-success">{successMessage}</p>} {/* Display success message */}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter email"
                value={email} // Controlled component
                onChange={handleEmailChange} // Handle input change
                required // Make the input required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Sign up
            </button>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default MyModal;
