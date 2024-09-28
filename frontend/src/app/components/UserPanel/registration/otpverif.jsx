import React, { useState, useRef } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserAPIService from '../../../services/user_service';

export const OTPModal = ({ show, handleClose, formData }) => {
  const [otpValues, setOtpValues] = useState(Array(4).fill(""));
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  
  
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = e.target.value;
    setOtpValues(newOtpValues);

    if (e.target.value && index < otpValues.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otpValues[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const otp = parseInt(otpValues.join(""));

    try {
      const { email, username, password } = formData;
      const response = await UserAPIService.signUpUser({ 
        email,
        username,
        password,
        otp
       });
      setSuccessMessage(response.message);
      handleClose();
    } catch (error) {
      setError(error.response.data.message);
    }

  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>OTP Verification</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 d-flex justify-content-center">
              {otpValues.map((value, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength="1"
                  className="form-control mx-2 py-2"
                  value={value}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)} 
                  style={{ width: '50px', textAlign: 'center' }}
                />
              ))}
            </div>
            {error && <p className="text-danger">{error}</p>}
            {successMessage && <p className="text-success">{successMessage}</p>}
            <Button variant="primary" onClick={handleSubmit} className="btn btn-primary w-100">
              Submit
            </Button>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};
