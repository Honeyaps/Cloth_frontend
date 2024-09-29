import React, { useState } from "react";
import { OTPModal } from "../../registration/otpverif"; 
import { SignupModal } from "../../registration/signup";
import { SigninModal } from "../../registration/signin";
import { CiHeart, CiUser } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";
import "./navbar.css";

export default function Navbar() {
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [showSigninModal, setShowSigninModal] = useState(false);
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

  const handleShowSignin = () => setShowSigninModal(true);
  const handleCloseSignin = () => setShowSigninModal(false);

  const handleOpenOTP = () => {
    if (!showOTPModal) { 
      setShowSignUpModal(false); 
      setShowOTPModal(true);    
    }   
  };

  const handleCloseOTP = () => setShowOTPModal(false);

  return (
    <>

      <div className="container">
        <div className="row mt-4" >
          
          <div className="col-md-4">
              <div className="justify-content-start">
                <a href="#" className="me-3 text-dark text-decoration-none">Customer Service</a>
                <a href="#" className="me-3 text-dark text-decoration-none">Newsletter</a>
                <a href="#" className="me-3 text-dark text-decoration-none">Find a store</a>
          
            </div>
          </div>

         
          <div className="col-md-4 text-center">
            <div>
              <a href="/">
                <img
                  src="/hk-logo.png"
                  alt="H&K Logo"
                  style={{ width: "140px" , marginBottom: "50px"}}
                />
              </a>
            </div>
          </div>

          
          <div className="col-md-4">
            <div className="justify-content-end d-flex align-items-center">
              <a href="#" className="me-3 text-dark text-decoration-none" onClick={handleShowSignin}>
              <CiUser  className="nav-icon"/> Sign in
              </a>
              <a href="#" className="me-3 text-dark text-decoration-none">
              <CiHeart  className="nav-icon"/> Favourites
              </a>
              <a href="#" className="text-dark text-decoration-none">
              <IoBagCheckOutline className="nav-icon"/> Shopping bag
              </a>
            </div>
          </div>
        </div>
      </div>

      {showSigninModal && (
        <SigninModal
          show={showSigninModal}
          handleClose={handleCloseSignin}
          openSignupModal={() => {
            handleCloseSignin();
            handleShowSignUp();
          }}
        />
      )}

      {showSignUpModal && (
        <SignupModal
          show={showSignUpModal}
          handleClose={handleCloseSignUp}
          handleOpenOTP={handleOpenOTP} 
          openSigninModal={() => {
            handleCloseSignUp();
            handleShowSignin();
          }}
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
