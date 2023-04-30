import React from "react";
import "./navbar.css";
import bitmoji from "../../images/bitmojiMobile.png";

const Navbar = ({ className }) => {
  return (
    <div className={`navbar-container ${className}`}>
      <div className="navbar-image">
        <img className="navbar-bitmoji" src={bitmoji} alt="Jayanth Bitmoji" />
      </div>
      <div className="navbar-name">
        <span>JAYANTH KODUR KUMAR</span>
      </div>
      <div className="navbar-menu-container">
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
      </div>
    </div>
  );
};

export default Navbar;
