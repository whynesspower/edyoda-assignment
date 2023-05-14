import React from "react";
import "./MainLockup.css"; //assuming there is a stylesheet
import one from "./1.png";
import two from "./2.png";
import three from "./3.png";
import four from "./4.png";
import five from "./5.png";

function Lockup() {
  return (
    <div className="example-container">
      <div className="header-text">
        <h2>Access curated courses worth</h2>
        <h3
          style={{
            color: "white",
            textDecoration: "line-through",
            // WebkitTextStroke: "1px red",
          }}
        >
          {" "}
          ₹ 18,500 at just ₹ 99 per year!
        </h3>
      </div>
      <div className="icon-text-container">
        <div className="icon-text">
          <img src={one} alt="icon1" />
          <p>Text One</p>
        </div>
        <div className="icon-text">
          <img src={two} alt="icon2" />
          <p>Text Two</p>
        </div>
        <div className="icon-text">
          <img src={three} alt="icon3" />
          <p>Text Three</p>
        </div>
        <div className="icon-text">
          <img src={four} alt="icon4" />
          <p>Text Four</p>
        </div>
        <div className="icon-text">
          <img src={five} alt="icon5" />
          <p>Text Five</p>
        </div>
      </div>
    </div>
  );
}

export default Lockup;
