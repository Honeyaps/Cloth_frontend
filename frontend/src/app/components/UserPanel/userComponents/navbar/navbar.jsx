import React, { useState } from "react";
import MyModal from "../../registration/signup"; // Import the signup modal component
import { OTPModal } from "../../registration/otpverif"; // Import OTP modal component

export default function Navbar() {
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showOTPModal, setShowOTPModal] = useState(false);

  const handleShowSignUp = () => setShowSignUpModal(true);
  const handleCloseSignUp = () => setShowSignUpModal(false);

  const handleOpenOTP = () => {
    setShowSignUpModal(false); // Close the signup modal
    setShowOTPModal(true);     // Open the OTP modal
  };

  const handleCloseOTP = () => setShowOTPModal(false);

  return (
    <>
      <div>
        <button className="btn btn-primary" onClick={handleShowSignUp}>
          Signup
        </button>
      </div>

      {/* Render Signup Modal */}
      {showSignUpModal && (
        <MyModal
          show={showSignUpModal}
          handleClose={handleCloseSignUp}
          handleOpenOTP={handleOpenOTP} // Passing handleOpenOTP function to open OTP modal after successful signup
        />
      )}

      {/* Render OTP Modal */}
      {showOTPModal && (
        <OTPModal show={showOTPModal} handleClose={handleCloseOTP} />
      )}
    </>
  );
}
