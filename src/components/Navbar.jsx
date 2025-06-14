import React from "react";
import logo from "../Assets/apna-logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Apna Logo" />
      </div>
      <div className="nav-buttons">
        <button className="outline">Candidate Login</button>
        <button className="filled">Employer Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
