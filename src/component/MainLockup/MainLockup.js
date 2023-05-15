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
        <h2 className="first-heading">Access curated courses worth</h2>
        <h2 className="second-heading">
          <span
            style={{
              fontFamily: "Roboto",
              color: "white",
              marginRight: "12px",
            }}
          >
            {"    "}₹ 18,500{" "}
          </span>{" "}
          at just{" "}
          <span
            style={{
              fontFamily: "Roboto",
              color: "#0096ff",
              marginLeft: "12px",
              marginRight: "12px",
            }}
          >
            {" "}
            ₹ 99{" "}
          </span>
          per year!
        </h2>
      </div>
      <div className="icon-text-container">
        <div className="icon-text">
          <img
            src={one}
            alt="icon1"
            style={{
              width: "68px",
              height: "68px",
              marginLeft: "0x",
              marginRight: "55px",
            }}
          />
          <p className="white-font">
            <span className="blue-font">100+</span> Job relevant courses
          </p>
        </div>
        <div className="icon-text">
          <img
            src={two}
            alt="icon2"
            style={{
              width: "68px",
              height: "68px",
              marginLeft: "0x",
              marginRight: "55px",
            }}
          />
          <p className="white-font">
            <span className="blue-font">20,000+</span> Hours of content
          </p>
        </div>
        <div className="icon-text">
          <img
            src={three}
            alt="icon3"
            style={{
              width: "68px",
              height: "68px",
              marginLeft: "0x",
              marginRight: "55px",
            }}
          />
          <p className="white-font">
            <span className="blue-font">Exclusive </span> webinar access
          </p>
        </div>
        <div className="icon-text">
          <img
            src={four}
            alt="icon4"
            style={{
              width: "68px",
              height: "68px",
              marginLeft: "0x",
              marginRight: "55px",
            }}
          />
          <p className="white-font">
            Scholarship worth <span className="blue-font">₹94,500</span>{" "}
          </p>
        </div>
        <div className="icon-text">
          <img
            src={five}
            alt="icon5"
            style={{
              marginLeft: "0x",
              marginRight: "55px",
              width: "68px",
              height: "68px",
            }}
          />
          <p className="white-font">
            <span className="blue-font">Ad Free</span> learning experience
          </p>
        </div>
      </div>
    </div>
  );
}

export default Lockup;
