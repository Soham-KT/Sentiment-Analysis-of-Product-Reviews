// src/Components/NavBar/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/login" className="nav-link">Login/Signup</Link>
      <Link to="/about" className="nav-link">About</Link>
    </nav>
  );
}

export default NavBar;
