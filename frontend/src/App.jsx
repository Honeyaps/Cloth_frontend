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
    setShowSignUpModal(false); 
    setShowOTPModal(true);
  };
  const handleCloseOTP = () => setShowOTPModal(false);

  return (
    <>
      <Navbar handleshow={handleShowSignUp} />

      <MyModal
        show={showSignUpModal}
        handleClose={handleCloseSignUp}
        handleSave={handleShowOTP} 
      />

      <OTPModal
        show={showOTPModal}
        handleClose={handleCloseOTP}
      />
    </>
  );
}

export default App;
