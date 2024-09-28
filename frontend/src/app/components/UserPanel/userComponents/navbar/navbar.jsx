import React, { useState } from "react";
import MyModal from "../../registration/signup"; 
import { OTPModal } from "../../registration/otpverif"; 

export default function Navbar() {
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
  });
  

  const handleFormDataUpdate = (newFormData) => {
    setFormData(newFormData);
  };

  const handleShowSignUp = () => setShowSignUpModal(true);
  const handleCloseSignUp = () => setShowSignUpModal(false);

  const handleOpenOTP = () => {
    if (!showOTPModal) { // Check if OTP modal is already open
      setShowSignUpModal(false); 
      setShowOTPModal(true);    
    }   
  };

  const handleCloseOTP = () => setShowOTPModal(false);

  return (
    <>
      <div>
        <button className="btn btn-primary" onClick={handleShowSignUp}>
          Signup
        </button>
      </div>

      {showSignUpModal && (
        <MyModal
          show={showSignUpModal}
          handleClose={handleCloseSignUp}
          handleOpenOTP={handleOpenOTP} 
          formData={formData}       
          onFormDataUpdate={handleFormDataUpdate}
        />
      )}

      {showOTPModal && (
        <OTPModal 
        show={showOTPModal} 
        handleClose={handleCloseOTP}
        formData={formData}
        />
      )}
    </>
  );
}
