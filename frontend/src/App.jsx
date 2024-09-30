import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AdminSignin } from './app/components/AdminPanel/adminregistration/adminSignin';
import { Main } from './app/components/UserPanel/main';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/adminsignin" element={<AdminSignin/>} />
        {/* <Route path="/about" element={<AboutPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

