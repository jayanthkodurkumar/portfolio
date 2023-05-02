import React from "react";
import Navbar from "../components/Navbar/Navbar";
import "./home.css";
import Description from "../components/Description/Description";
import Skills from "../components/Skills/Skills";

const Home = ({ children }) => {
  return (
    <div className={`home-container ${children}`}>
      <Navbar className="navbar" />
      <Description className="description" />
      <Skills className="skills" />
    </div>
  );
};

export default Home;
