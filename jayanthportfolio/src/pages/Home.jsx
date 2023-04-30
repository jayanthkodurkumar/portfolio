import React from "react";
import Navbar from "../components/Navbar/Navbar";
import "./home.css";
import Description from "../components/Description/Description";

const Home = ({ children }) => {
  return (
    <div className={`home-container ${children}`}>
      <Navbar className="navbar" />
      <Description className="description" />
    </div>
  );
};

export default Home;
