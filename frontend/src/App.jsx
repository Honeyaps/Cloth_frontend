import './App.css';
import { OTPModal } from './app/components/UserPanel/registration/otpverif';
import MyModal from './app/components/UserPanel/registration/signup';
import Navbar from './app/components/UserPanel/userComponents/navbar/navbar';
import { useState } from 'react';

function App() {
  // Manage visibility state for both modals
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showOTPModal, setShowOTPModal] = useState(false);

  // Handlers for signup modal
  const handleShowSignUp = () => setShowSignUpModal(true);
  const handleCloseSignUp = () => setShowSignUpModal(false);

  // Handlers for OTP modal
  const handleShowOTP = () => {
    setShowSignUpModal(false); // Close signup modal
    setShowOTPModal(true); // Open OTP modal
  };
  const handleCloseOTP = () => setShowOTPModal(false);

  return (
    <>
      <Navbar handleshow={handleShowSignUp} />

      {/* Sign-up modal */}
      <MyModal
        show={showSignUpModal}
        handleClose={handleCloseSignUp}
        handleSave={handleShowOTP} // Open OTP modal on save
      />

      {/* OTP modal */}
      <OTPModal
        show={showOTPModal}
        handleClose={handleCloseOTP}
      />
    </>
  );
}

export default App;
