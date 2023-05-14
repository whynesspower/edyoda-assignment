import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import "./Navbar.css"; // import your CSS file
import logo from "./EDYODA.png";
function NavigationBar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} className="Logo" alt="Company Logo" />
        <div className="dropdown">
          <button className="dropbtn">Courses</button>
          <FaAngleDown />
          <div className="dropdown-content">
            <a href="#">Course 1</a>
            <a href="#">Course 2</a>
            <a href="#">Course 3</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Programs</button>
          <FaAngleDown />
          <div className="dropdown-content">
            <a href="#">Program 1</a>
            <a href="#">Program 2</a>
            <a href="#">Program 3</a>
          </div>
        </div>
      </div>
      <div className="navbar-right">
        <FaSearch className="Search" />
        <button className="Loginn">Log in</button>
        <button className="JoinNow">JOIN NOW</button>
      </div>
    </div>
  );
}

export default NavigationBar;
