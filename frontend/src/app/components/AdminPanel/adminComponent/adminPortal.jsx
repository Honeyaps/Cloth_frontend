import { useEffect, useState } from "react";
import { CiLogout } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { PiShoppingBagFill } from "react-icons/pi";
import { RiSettings3Line } from "react-icons/ri";
import { TfiDashboard } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import "./adminPortal.css";
import { Dashboard } from "./dashboard/dashboard";
import { Products } from "./products/product";
import { Settings } from "./settings/settings";
import { AddProduct } from "./products/addProduct/addproduct";
import { EditProduct } from "./products/editProduct/editProduct";

export const AdminPortal = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('admintoken')) {
      navigate('/adminsignin');
    }
  }, [navigate])

  const handleLogout = () => {
    localStorage.removeItem("admintoken");
    navigate("/");
  };

  const [isHoveredLogout, setIsHoveredLogout] = useState(false);
  const [activeComponent, setActiveComponent] = useState("Dashboard");
  const [breadcrumb, setBreadcrumb] = useState("Dashboard");
  const [productId, setProductId] = useState(null);

  const handleNavigation = (component, id) => {
    setActiveComponent(component);

    // Store the product ID if available
    if (component === 'EditProduct' && id) {
        setProductId(id); // Assuming you have defined productId state
    }

    switch (component) {
        case "Dashboard":
            setBreadcrumb("Dashboard");
            break;
        case "Products":
            setBreadcrumb("Product");
            break;
        case "AddProduct":
            setBreadcrumb("Product > AddProduct");
            break;
        case "EditProduct":
            setBreadcrumb("Product > EditProduct");
            break;
        case "Settings":
            setBreadcrumb("Settings");
            break;
        default:
            setBreadcrumb("Dashboard");
    }
};

// Back button logic
const handleBack = () => {
  if (activeComponent === "AddProduct" || activeComponent === "EditProduct") {
    handleNavigation("Products"); 
  } else if (activeComponent === "Products") {
    handleNavigation("Dashboard"); 
  } else {
    handleNavigation("Dashboard"); 
  }
};


// Update the renderComponent function
const renderComponent = () => {
    switch (activeComponent) {
        case "Dashboard":
            return <Dashboard />;
        case "Products":
            return <Products setActiveComponent={handleNavigation} />;
        case "AddProduct":
            return <AddProduct setActiveComponent={handleNavigation} />;
        case "EditProduct":
            return <EditProduct setActiveComponent={handleNavigation} productId={productId} />; // Pass the productId
        case "Settings":
            return <Settings />;
        default:
            return <Dashboard />;
    }
};


return (
  <div className="container-fluid admin-layout">
    <nav className="sidebar px-1">
      <div className="text-start logo">
        <img
          src="hk-logo.png"
          alt="Logo"
          style={{ width: "90px", height: "55px" }}
        />
      </div>
      <ul className="list-unstyled px-2">
        <li
          onClick={() => handleNavigation("Dashboard")}
          className={activeComponent === "Dashboard" ? "active" : ""}
        >
          <TfiDashboard className="nav-icon" /> Dashboard
        </li>
        <li
          onClick={() => handleNavigation("Products")}
          className={activeComponent === "Products" ? "active" : ""}
        >
          <PiShoppingBagFill className="nav-icon" /> Products
        </li>
        <li
          onClick={() => handleNavigation("Settings")}
          className={activeComponent === "Settings" ? "active" : ""}
        >
          <RiSettings3Line className="nav-icon" /> Settings
        </li>
      </ul>
    </nav>

    <div className="content-wrapper">
      <div className="back_navigation px-2 border-0 row">
        <div className="d-flex align-items-center col-md-6">
          <button
            className="bg-transparent border-0 fs-6"
            onClick={handleBack}
          >
            <MdOutlineKeyboardArrowLeft className="nav-icon" />
            Back
          </button>
          <span style={{ fontSize: "23px" }}>|</span>
          <span className="mx-2" style={{ fontSize: "16px" }}>
            {breadcrumb} {/* Display the breadcrumb */}
          </span>
        </div>

        <div className="d-flex align-items-center justify-content-end col-md-6">
          <div
            className="position-relative"
            onMouseEnter={() => setIsHoveredLogout(true)}
            onMouseLeave={() => setIsHoveredLogout(false)}
          >
            <button className="bg-transparent border-0 fs-6">
              <FaUserCircle className="nav-icon fs-3 avtar" />
            </button>

            {isHoveredLogout && (
              <div className="logout-dropdown position-absolute shadow">
                <button className="logout-btn form_btn w-100" onClick={handleLogout}>
                  <CiLogout className="nav-icon fs-5" /> Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="content">{renderComponent()}</div>
    </div>
  </div>
);
};