import React, { useState } from "react";
import "./PaymentSummary.css";

const PaymentSummary = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const getAmountForOption = (option) => {
    // write logic to get payment amount based on selected option
    // this can be hardcoded or fetched from a backend API
    switch (option) {
      case "option1":
        return "$50";
      case "option2":
        return "$100";
      case "option3":
        return "$150";
      case "option4":
        return "$200";
      default:
        return "";
    }
  };

  const handleSubmit = () => {
    // write logic to handle form submission
  };

  return (
    <div className="payment-summary-form">
      <div className="progress-bar">
        <button className="progress-button active"></button>
        <button className="progress-button"></button>
      </div>
      <h3 className="form-header">Payment Summary</h3>
      <div className="input-container">
        <div
          className={`input-box ${
            selectedOption === "option1" ? "active" : ""
          }`}
          onClick={() => handleOptionSelect("option1")}
        >
          <div className="input-title">Option 1</div>
          <div className="input-amount">{getAmountForOption("option1")}</div>
        </div>
        <div
          className={`input-box ${
            selectedOption === "option2" ? "active" : ""
          }`}
          onClick={() => handleOptionSelect("option2")}
        >
          <div className="input-title">Option 2</div>
          <div className="input-amount">{getAmountForOption("option2")}</div>
        </div>
        <div
          className={`input-box ${
            selectedOption === "option3" ? "active" : ""
          }`}
          onClick={() => handleOptionSelect("option3")}
        >
          <div className="input-title">Option 3</div>
          <div className="input-amount">{getAmountForOption("option3")}</div>
        </div>
        <div
          className={`input-box ${
            selectedOption === "option4" ? "active" : ""
          }`}
          onClick={() => handleOptionSelect("option4")}
        >
          <div className="input-title">Option 4</div>
          <div className="input-amount">{getAmountForOption("option4")}</div>
        </div>
      </div>
      <div className="summary-container">
        <div className="summary-text">
          Total Payment: {getAmountForOption(selectedOption)}
        </div>
      </div>
      <div className="button-container">
        <button className="cancel-button">Cancel</button>
        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default PaymentSummary;
