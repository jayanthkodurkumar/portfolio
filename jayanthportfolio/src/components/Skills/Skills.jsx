import React from "react";
import "./skills.css";

const Skills = ({ className }) => {
  const skillsArray1 = [
    "Java",

    "CSS",
    "Python",
    "Bootstrap",
    "HTML5",
    "Material UI",
  ];
  const skillsArray2 = [
    "JavaScript",
    "MYSQL",
    "React JS",
    "MongoDB",
    "Node JS",
    "PostGre SQL",
  ];

  const skillsList1 = skillsArray1.map((skill, index) => {
    return (
      <li className="skills-text" key={index}>
        {skill}
      </li>
    );
  });
  const skillsList2 = skillsArray2.map((skill, index) => {
    return (
      <li className="skills-text1" key={index}>
        {skill}
      </li>
    );
  });

  return (
    <div className={`skills-container ${className}`}>
      <ul className="skills-box"> {skillsList1}</ul>
      <ul className="skills-box"> {skillsList2}</ul>
    </div>
  );
};

export default Skills;
