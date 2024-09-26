import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyModal = ({ show, handleClose, handleSave }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Sign up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <form action="">
            <div className='mb-3'>
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter username"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter password"
                className="form-control"
                id="password"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="cpassword" className="form-label">
                Confirm Password
              </label>  
              <input
                type="password"
                placeholder="Enter confirm password"
                className="form-control"
                id="cpassword"
              />
            </div>
            <Button variant="primary" onClick={handleSave} className='btn btn-primary w-100'>
              Sign up
            </Button>
          </form>
        </div>
      </Modal.Body> 
    </Modal>
  );
};

export default MyModal;
