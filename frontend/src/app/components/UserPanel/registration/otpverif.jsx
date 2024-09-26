import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const OTPModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>OTP Verification</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <form action="">
            <div className="mb-3">
              <label htmlFor="otp" className="form-label">
                OTP
              </label>
              <input
                type="text"
                className="form-control"
                name="otp"
                placeholder="Enter OTP"
                id="otp"
                aria-describedby="otpHelp"
              />
            </div>
            <Button variant="primary" onClick={handleClose} className='btn btn-primary w-100'>
              Submit
            </Button>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};
