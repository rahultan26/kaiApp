import React, { useState, useEffect } from "react";
import "./fields.css";
import { useNavigate } from "react-router-dom";

function Fields() {
  const [ifscCode, setIFSCCode] = useState("");
  const [validationResult, setValidationResult] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [name, setName] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [city, setCity] = useState("");
  const [bank, setBank] = useState("");
  const [branch, setBranch] = useState("");
  let navigate = useNavigate();
  const handleChange = (e) => {
    const value = e.target.value;
    // Only allow numeric values
    const numericValue = value.replace(/\D/g, "");
    setAccountNumber(numericValue);
  };
  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
  };
  const registerClick = () => {
    navigate("/pennydrop", {
      state: {
        name: name,
        accountNumber: accountNumber,
        ifscCode: ifscCode,
        city: city,
        bank: bank,
        branch: branch,
      },
    });
  };
  const validateIFSC = () => {
    setValidationResult("");
    if (ifscCode.trim() === "") {
      setValidationResult("Please enter an IFSC code");
      return;
    }

    const apiUrl = `https://ifsc.razorpay.com/${ifscCode}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data === "Not Found") {
          setValidationResult("Invalid IFSC code");
          setIsValid(false);
        } else {
          setValidationResult("IFSC code is valid");
          setBranch(data.BRANCH);
          setBank(data.BANK);
          setCity(data.CITY);
          setIsValid(true);
        }
      })
      .catch((error) => {
        console.error("Error validating IFSC code:", error);
        setValidationResult("An error occurred while validating IFSC code");
      });
  };
  const buttonStyle = {
    borderColor: isValid ? "green" : "red",
  };
  const isRegisterButtonDisabled = !isValid || accountNumber.trim() === "";

  return (
    <div className="field">
      <div className="name">Name</div>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter Name"
        className="rectangle"
      />
      <div className="name">Account Number</div>
      <input
        type="text"
        value={accountNumber}
        onChange={handleChange}
        placeholder="Enter Acc number"
        className="rectangle"
      />

      <div className="name">IFSC Code</div>
      <div>
        <input
          className="rectangle"
          type="text"
          value={ifscCode}
          onChange={(e) => setIFSCCode(e.target.value)}
          placeholder="Enter IFSC code"
        />
      </div>
      <button className="button" onClick={validateIFSC}>
        Validate IFSC Code
      </button>
      <div>{validationResult}</div>
      <button
        disabled={isRegisterButtonDisabled}
        className="button"
        style={buttonStyle}
        onClick={registerClick}
      >
        Register
      </button>
    </div>
  );
}

export default Fields;
