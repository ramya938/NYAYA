import React from "react";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";

import { FaHome, FaBalanceScale, FaRobot, FaUser, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <div className="sidebar">
      
      {/* TOP MENU */}
      <div className="sidebar-top">
        <h2 className="logo">NYAYA</h2>

        <div className="menu-item" onClick={() => navigate("/home")}>
          <FaHome /> Home
        </div>

        <div className="menu-item" onClick={() => navigate("/lawyers")}>
          <FaBalanceScale /> Top Lawyers
        </div>

        <div className="menu-item" onClick={() => navigate("/cases")}>
          <FaBalanceScale /> Past Cases
        </div>

        <div className="menu-item" onClick={() => navigate("/chatbot")}>
          <FaRobot /> Chatbot
        </div>

        <div className="menu-item" onClick={() => navigate("/profile")}>
          <FaUser /> Profile
        </div>
      </div>

      {/* LOGOUT BUTTON */}
      <div className="logout-section">
        <div className="logout-btn" onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </div>
      </div>

    </div>
  );
};

export default Sidebar;
