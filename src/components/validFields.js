import React from "react";
import "./ValidFields.css";
const ValidFields = (props) => {
  return (
    <div className="container">
      <div className="item">
        <span style={{ fontWeight: "bold", color: "grey" }}>Name:</span>{" "}
        {/* Field name with light grey color */}
        <span style={{ fontWeight: "bold", color: "#000" }}>
          {props.name}
        </span>{" "}
        {/* Name with dark black color */}
      </div>
      <div className="item">
        <span style={{ fontWeight: "bold", color: "grey" }}>
          Account Number:
        </span>{" "}
        {/* Field name with light grey color */}
        <span style={{ fontWeight: "bold", color: "#000" }}>
          {props.accountNumber}
        </span>{" "}
        {/* Name with dark black color */}
      </div>
      <div className="item">
        <span style={{ fontWeight: "bold", color: "grey" }}>IFSC Code:</span>{" "}
        {/* Field name with light grey color */}
        <span style={{ fontWeight: "bold", color: "#000" }}>
          {props.ifscCode}
        </span>{" "}
        {/* Name with dark black color */}
      </div>
      <div className="item">
        <span style={{ fontWeight: "bold", color: "grey" }}>Bank:</span>{" "}
        {/* Field name with light grey color */}
        <span style={{ fontWeight: "bold", color: "#000" }}>
          {props.bank}
        </span>{" "}
        {/* Name with dark black color */}
      </div>
      <div className="item">
        <span style={{ fontWeight: "bold", color: "grey" }}>City:</span>{" "}
        {/* Field name with light grey color */}
        <span style={{ fontWeight: "bold", color: "#000" }}>
          {props.city}
        </span>{" "}
        {/* Name with dark black color */}
      </div>
      <div className="item">
        <span style={{ fontWeight: "bold", color: "grey" }}>Branch:</span>{" "}
        {/* Field name with light grey color */}
        <span style={{ fontWeight: "bold", color: "#000" }}>
          {props.branch}
        </span>{" "}
        {/* Name with dark black color */}
      </div>
      <div className="item">
        <span style={{ fontWeight: "bold", color: "grey" }}>Amount Sent:</span>{" "}
        {/* Field name with light grey color */}
        <span style={{ fontWeight: "bold", color: "#000" }}>
          &#8377; 1
        </span>{" "}
        {/* Name with dark black color */}
      </div>
    </div>
  );
};

export default ValidFields;
