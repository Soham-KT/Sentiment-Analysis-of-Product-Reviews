// src/pages/LoginPage.js
import React, { useState } from "react";
import "../styles/LoginSignup.css";
import { Link } from "react-router-dom";
function LoginPage() {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <input
        type="text"
        name="username"
        placeholder="Username or Email"
        value={form.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
      />
      <button className="btn">Login</button>
      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
}

export default LoginPage;
