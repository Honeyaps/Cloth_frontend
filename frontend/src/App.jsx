import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AdminSignin } from './app/components/AdminPanel/adminregistration/adminSignin';
import { Main } from './app/components/UserPanel/mainpage';
import { ShoppingBag } from './app/components/UserPanel/userComponents/shoppingBag/bag';
import { Favourites } from './app/components/UserPanel/userComponents/favourites/favourites';
import { Newin } from './app/components/UserPanel/userComponents/newin/newin';
import { FindStore } from './app/components/UserPanel/userComponents/findStore/findStore';
import { Customer } from './app/components/UserPanel/userComponents/customerService/customer';
import { FPEmail } from './app/components/UserPanel/registration/forgetPass/email';
import { FPOtp } from './app/components/UserPanel/registration/forgetPass/otpPass';
import { FPresetPass } from './app/components/UserPanel/registration/forgetPass/resetPass';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/adminsignin" element={<AdminSignin/>} />
        <Route path="/shoppingbag" element={<ShoppingBag/>} />
        <Route path="/favourites" element={<Favourites/>} />
        <Route path="/newin" element={<Newin/>} />
        <Route path="/store-locator" element={<FindStore/>} />
        <Route path="/customer-service" element={<Customer/>} />
        <Route path="/request-resetpassword" element={<FPEmail/>} />
        <Route path="/request-resetpassword/otp" element={<FPOtp/>} />
        <Route path="/request-resetpassword/otp/reset-password" element={<FPresetPass/>} />
      </Routes>
    </Router>
  );
}

export default App;

