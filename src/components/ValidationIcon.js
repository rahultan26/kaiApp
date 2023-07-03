import React from "react";
import "./ValidationIcon.css";
import tick from "../images/tick.jpg";

const ValidationIcon = () => {
  return (
    <div className="validation-icon">
      <img src={tick} alt="tick-logo" className="tick" />
    </div>
  );
};

export default ValidationIcon;
