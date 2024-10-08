// LoadingButton.js
import React from 'react';
import PropTypes from 'prop-types';
import './helper.css';
import Swal from 'sweetalert2';

export const DeleteConfirmationAlert = ({ title, text, onConfirm, onCancel }) => {
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
        confirmButtonColor: '#3085d6',
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
