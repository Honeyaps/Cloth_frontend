// LoadingButton.js
import React from 'react';
import PropTypes from 'prop-types';
import './helper.css';
import Swal from 'sweetalert2';
import { Spinner } from 'react-bootstrap';

export const DeleteConfirmationAlert = ({ text, onConfirm }) => {
    Swal.fire({
      title: 'Are you sure?',
      text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#333333',
      cancelButtonColor: '',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.isConfirmed) {
        if (onConfirm) onConfirm(); // Execute onConfirm if confirmed
      } else {
        if (onCancel) onCancel(); // Execute onCancel if canceled
      }
    });
  };

  export const AddConfirmationAlert = (message) => {
    Swal.fire({
        title: 'Success!',
        text: message || 'Product added successfully!',
        icon: 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: '#333333',
      });
  };


export const LoadingButton = ({ isLoading, onClick, children, disabled, className }) => {
    return (
        <button
            onClick={isLoading ? null : onClick}
            disabled={isLoading || disabled}
            className={`loading-button ${className}`}
        >
            {isLoading ? (
                <span className="loader"></span> // Loader element
            ) : (
                children
            )}
        </button>
    );
};

LoadingButton.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    className: PropTypes.string,
};

LoadingButton.defaultProps = {
    disabled: false,
    className: '',
};

export const LoadingSpinner = () => {
  return (
    <div className="spinner-container">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};
