import React, { useState } from "react";
import { OTPModal } from "../../registration/otpverif";
import { SignupModal } from "../../registration/signup";
import { SigninModal } from "../../registration/signin";
import { CiHeart, CiUser, CiLogout } from "react-icons/ci";
import { IoBagCheckOutline, IoNewspaperOutline } from "react-icons/io5";
import { SlMenu } from "react-icons/sl";
import { RiCustomerService2Fill } from "react-icons/ri";
import { GrMap } from "react-icons/gr";
import { BsHandbag } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { GoSearch } from "react-icons/go";
import "./navbar.css";

export const Navbar = () => {
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [showSigninModal, setShowSigninModal] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
  });
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

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
    <div>

      {/* Desktop Navbar */}
      <div className="container fullscreen_view">
        <div className="row mt-4">
          
          <div className="col-md-4">
            <div className="justify-content-start">
              <a href="/customer-service" className="me-3 text-dark">Customer Service</a>
              <a href="/newin" className="me-3 text-dark">Newin</a>
              <a href="/store-locator" className="me-3 text-dark">Find a store</a>
            </div>
          </div>

          <div className="col-md-4 text-center">
            <div>
              <a href="/">
                <img
                  src="/hk-logo.png"
                  alt="H&K Logo"
                  style={{ width: "140px", marginBottom: "50px" }}
                />
              </a>
            </div>
          </div>

          <div className="col-md-4">
            <div className="justify-content-end d-flex align-items-center">
              <a className="me-3 text-dark" onClick={handleShowSignin}>
                <CiUser className="nav-icon"/> Sign in
              </a>
              <a href="/favourites" className="me-3 text-dark">
                <CiHeart className="nav-icon"/> Favourites
              </a>
              <a href="/shoppingbag" className="text-dark">
                <IoBagCheckOutline className="nav-icon"/> Shopping bag
              </a>
            </div>
          </div>
        </div>

        {/* Search Bar for Desktop */}
        <div className="row search_bar_row">
          <div className="col-12 d-flex justify-content-end">
            <div className="d-flex align-items-center handbag-container">
              <GoSearch className="nav-icon search-icon" />
              <input type="text" placeholder="Search" className="search_bar" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Navbar */}
      <div className="container-fluid mobile_view">
        <div className="mt-4 justify-content-between d-flex">
          <div>
            <a href="/">
              <img
                src="/hk-logo.png"
                alt="H&K Logo"
                style={{ width: "140px", marginBottom: "50px" }}
              />
            </a>
          </div>

          <div className="d-flex">
            <div className="me-4 d-block text-center handbag-container">
              <div className="handbag-icon-wrapper">
                <BsHandbag className="nav-icon" />
              </div>
              <div className="handbag-count">0</div>
            </div>
            <div>
              {!isOpen ? (
                <SlMenu className="nav-icon" onClick={toggleNavbar} />
              ) : (
                <RxCross1 className="nav-icon" onClick={toggleNavbar} />
              )}
            </div>
          </div>
        </div>

        {/* Search Bar for Mobile */}
        <div className="row search_bar_row  ">
          <div className="col-12 d-flex justify-content-center">
            <div className="d-flex align-items-center handbag-container">
              <GoSearch className="nav-icon search-icon" />
              <input type="text" placeholder="Search" className="search_bar" />
            </div>
          </div>
        </div>

        {/* Side Navbar for Mobile */}
        <div className={`side-navbar ${isOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <a href="#" onClick={handleShowSignin}>
                <CiUser className="nav-icon" /> Sign in
              </a>
            </li>
            <li>
              <a href="#">
                <RiCustomerService2Fill className="nav-icon" /> Customer Service
              </a>
            </li>
            <li>
              <a href="/newin">
                <IoNewspaperOutline className="nav-icon" /> Newin
              </a>
            </li>
            <li>
              <a href="#">
                <GrMap className="nav-icon" /> Find a store
              </a>
            </li>
            <li>
              <a href="#">
                <CiLogout className="nav-icon" /> Log out
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Modals */}
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
    </div>
  );
};
