import React, { useState } from "react";
import s1 from "./s1.png";
import s2 from "./s2.png";
import razor from "./razor.png";
import "./PaymentSummary.css";
import alertt from "./Alert.png";
import offexp from "./offexp.png";
import tag from "./Tag.png";
import btnn from "./Button-Container.png";
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
        return "₹99";
      case "option2":
        return "₹179";
      case "option3":
        return "₹149";
      case "option4":
        return "₹99";
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
        <img src={s1} className="progress-img"></img>
        <img src={s2} className="progress-img"></img>
      </div>
      <h3 className="form-header">Select your subscription plan</h3>
      <div className="input-container">
        {/* <div
          className={`input-box ${
            selectedOption === "option1" ? "active" : ""
          }`}
          onClick={() => handleOptionSelect("option1")}
        >
          <div className="input-title">Option 1</div>
          <div className="input-amount">{getAmountForOption("option1")}</div>
        </div> */}
        <img src={offexp}></img>
        <div
          className={`input-box ${
            selectedOption === "option2" ? "active" : ""
          }`}
          onClick={() => handleOptionSelect("option2")}
        >
          <img src={tag} className="tag-img"></img>
          <div className="input-title">12 Months Subscription </div>
          <div className="input-amount">{getAmountForOption("option2")}</div>
        </div>
        <div
          className={`input-box ${
            selectedOption === "option3" ? "active" : ""
          }`}
          onClick={() => handleOptionSelect("option3")}
        >
          <div className="input-title">6 Months Subscription </div>
          <div className="input-amount">{getAmountForOption("option3")}</div>
        </div>
        <div
          className={`input-box ${
            selectedOption === "option4" ? "active" : ""
          }`}
          onClick={() => handleOptionSelect("option4")}
        >
          <div className="input-title">3 Months Subscription </div>
          <div className="input-amount">{getAmountForOption("option4")}</div>
        </div>
      </div>
      <hr />
      <div style={{ textAlign: "left", marginLeft: "20px" }}>
        Subscription Fee <span style={{ marginLeft: "300px" }}>₹18,500</span>
      </div>
      <br />
      <img src={alertt}></img>
      <div className="summary-container">
        <div
          style={{ textAlign: "left", marginLeft: "10px", marginRight: "0px" }}
        >
          <b>Total</b> (Incl. of 18% GST)
          <span
            style={{
              marginLeft: "250px",
              marginTop: "0px",
              fontWeight: "bold",
              fontSize: "20px",
              padding: "0px",
              textAlign: "right",
            }}
          >
            {getAmountForOption(selectedOption)}
          </span>
        </div>
      </div>
      <div className="button-container">
        {/* <button className="cancel-button">Cancel</button>
        <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button> */}
        <img src={btnn} className="submit-button"></img>
      </div>
      <img src={razor}></img>
      {/* <div className="razor"></div> */}
    </div>
  );
};

export default PaymentSummary;
