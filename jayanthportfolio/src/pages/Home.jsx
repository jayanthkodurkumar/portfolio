import React from "react";
import Navbar from "../components/Navbar/Navbar";
import "./home.css";
import Description from "../components/Description/Description";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar className="navbar" />
      <Description className="description" />
    </div>
  );
};

export default Home;
