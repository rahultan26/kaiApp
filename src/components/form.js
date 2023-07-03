import { React, useState } from "react";
import "./form.css";
import logo from "../images/download.png";
import Fields from "./fields";
function Form() {
  return (
    <div>
      <div className="content">
        <div style={{ alignItems: "center" }}>
          <img src={logo} alt="logo" />
        </div>
        <div className="heading">Create an account</div>
        <Fields />
      </div>
    </div>
  );
}

export default Form;
