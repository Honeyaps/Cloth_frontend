import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Navbar } from "../../../UserPanel/userComponents/navbar/navbar";
import './adminPortal.css';
import { Dashboard } from "../adminPortal/dashboard/dashboard";

export const AdminPortal = () => {
  // const navigate = useNavigate();

// useEffect(() => {
    
//     if (!localStorage.getItem('admintoken')) {
//         navigate('/adminsignin');
//     }

// },[navigate])


    const [activeComponent, setActiveComponent] = useState('dashboard');

    const renderComponent = () => {
      switch (activeComponent) {
        case 'dashboard':
          return <Dashboard />;
        case 'profile':
          return <Navbar />;
        case 'settings':
          return <Navbar />;
        default:
          return <Navbar />;
      }
    };


return (
    <div className="container-fluid admin-layout">
      <nav className="sidebar">
        <ul>
          <li onClick={() => setActiveComponent('dashboard')}>Dashboard</li>
          <li onClick={() => setActiveComponent('profile')}>Profile</li>
          <li onClick={() => setActiveComponent('settings')}>Settings</li>
        </ul>
      </nav>
      <div className="content">
        {renderComponent()}
      </div>
    </div>
);
   
}