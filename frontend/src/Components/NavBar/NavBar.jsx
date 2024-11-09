// src/Components/NavBar/NavBar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../../assets/logo1.png";

function NavBar() {
  return (
    // <nav className="navbar">
    //   <Link to="/" className="nav-link">Home</Link>
    //   <Link to="/login" className="nav-link">Login/Signup</Link>
    //   <Link to="/about" className="nav-link">About</Link>
    // </nav>
    <nav className="nav-wrapper">
      <div className="nav-content">
        <div className="nav-head">
          <img className="logo" src={logo} alt="Logo" />
          <h3>ProductShala</h3>
        </div>
        <ul>
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/login" className="nav-link">
              Login/Signup
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
        <button className="contact-btn" onClick={() => {}}>
          theme
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
