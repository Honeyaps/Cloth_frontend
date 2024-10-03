import React from 'react';
import { PiFacebookLogoLight, PiInstagramLogoLight, PiPinterestLogo, PiYoutubeLogoLight ,PiTiktokLogoLight ,PiSpotifyLogoLight } from "react-icons/pi";
import './footer.css';

export const Footer = () => {
  return (
    <div className="container-fluid mt-5 p-5 footer_section">
      <div className="row">
      
        <div className="col-md-3">
          <h6 className="fw-bold">SHOP</h6>
          <ul className="list-unstyled">
            <li><a href="#" className="text-dark text-decoration-none">Ladies</a></li>
            <li><a href="#" className="text-dark text-decoration-none">Men</a></li>
            <li><a href="#" className="text-dark text-decoration-none">Baby</a></li>
            <li><a href="#" className="text-dark text-decoration-none">Kids</a></li>
            <li><a href="#" className="text-dark text-decoration-none">H&K HOME</a></li>
            <li><a href="#" className="text-dark text-decoration-none">Sport</a></li>
            <li><a href="#" className="text-dark text-decoration-none">Magazine</a></li>
          </ul>
        </div>

    
        <div className="col-md-3">
          <h6 className="fw-bold">CORPORATE INFO</h6>
          <ul className="list-unstyled">
            <li><a href="#" className="text-dark text-decoration-none">Career at H&M</a></li>
            <li><a href="#" className="text-dark text-decoration-none">About H&K group</a></li>
            <li><a href="#" className="text-dark text-decoration-none">Sustainability H&M Group</a></li>
            <li><a href="#" className="text-dark text-decoration-none">Press</a></li>
            <li><a href="#" className="text-dark text-decoration-none">Investor relations</a></li>
            <li><a href="#" className="text-dark text-decoration-none">Corporate governance</a></li>
          </ul>
        </div>

        
        <div className="col-md-3">
          <h6 className="fw-bold">HELP</h6>
          <ul className="list-unstyled">
            <li><a href="#" className="text-dark text-decoration-none">Customer Service</a></li>
            <li><a href="#" className="text-dark text-decoration-none">My H&K</a></li>
            <li><a href="#" className="text-dark text-decoration-none">Find a store</a></li>
            <li><a href="/adminsignin" className="text-dark text-decoration-none">Legal & Privacy</a></li>
            <li><a href="#" className="text-dark text-decoration-none">Contact</a></li>
            <li><a href="#" className="text-dark text-decoration-none">Report a scam</a></li>
            <li><a href="#" className="text-dark text-decoration-none">Cookie Settings</a></li>
          </ul>
        </div>

       
        <div className="col-md-3">
          <p>Sign up now and be the first to know about exclusive offers, latest fashion news & style tips!</p>
          <a href="#" className="text-decoration-none fw-bold text-dark">Read more →</a>
        </div>
      </div>

   
      <div className="text-center mt-4">
        <a href="#" className="me-3 text-dark icon"  ><PiInstagramLogoLight /></a>
        <a href="#" className="me-3 text-dark icon"><PiTiktokLogoLight /></a>
        <a href="#" className="me-3 text-dark icon"><PiSpotifyLogoLight /></a>
        <a href="#" className="me-3 text-dark icon"><PiYoutubeLogoLight /></a>
        <a href="#" className="me-3 text-dark icon"><PiPinterestLogo /></a>
        <a href="#" className="me-3 text-dark icon"><PiFacebookLogoLight /></a>
      </div>

    </div>
  );
};


