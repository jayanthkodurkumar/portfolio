import React from "react";
import "./description.css";

const Description = ({ className }) => {
  return (
    <div className={`description-container ${className}`}>
      <p className="description-text-1">CODE. DEBUG. REPEAT.</p>
      <p className="description-text-2">
        {" "}
        Hi stranger 👋 My name is <span>Jayanth</span> and I am an aspiring
        software developer and strategist.
      </p>
    </div>
  );
};

export default Description;
