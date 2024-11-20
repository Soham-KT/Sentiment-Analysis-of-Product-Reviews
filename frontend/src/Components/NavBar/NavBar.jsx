import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "../../assets/logo1.png";

function NavBar() {
  return (
    <header className="nav-wrapper">
      <div className="nav-content">
        <div className="nav-head">
          <img className="logo" src={logo} alt="Logo" />
          <h3>ProductShala</h3>
        </div>

        <nav>
          <ul>
            <li>
              <NavLink to="/" className="nav-link"> Home </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-link"> About </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav-link"> Contact </NavLink>
            </li>
            {/* <li>
              <NavLink to="/login" className="nav-link"> Register </NavLink>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
