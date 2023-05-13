import React from "react";
import "./Navbar.css"; // import your CSS file

function NavigationBar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src="/company-logo.png" alt="Company Logo" />
        <div className="dropdown">
          <button className="dropbtn">Courses</button>
          <div className="dropdown-content">
            <a href="#">Course 1</a>
            <a href="#">Course 2</a>
            <a href="#">Course 3</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Programs</button>
          <div className="dropdown-content">
            <a href="#">Program 1</a>
            <a href="#">Program 2</a>
            <a href="#">Program 3</a>
          </div>
        </div>
      </div>
      <div className="navbar-right">
        <input type="text" placeholder="Search..." />
        <button>Login</button>
        <button>Join Now</button>
      </div>
    </div>
  );
}

export default NavigationBar;
