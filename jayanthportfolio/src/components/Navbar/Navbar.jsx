import React from "react";
import "./navbar.css";

const Navbar = ({ className }) => {
  return (
    <div className={`navbar-container ${className}`}>
      <div className="navbar-name">JAYANTH KODUR KUMAR</div>
      <div className="navbar-menu-container">
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
      </div>
    </div>
  );
};

export default Navbar;
