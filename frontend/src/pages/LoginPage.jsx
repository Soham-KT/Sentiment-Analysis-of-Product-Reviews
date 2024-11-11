// src/pages/LoginPage.js
import React, { useState } from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";
import login from "../assets/login.png";

function LoginPage() {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    // <div className="container">
    //   <h2>Login</h2>
    //   <input
    //     type="text"
    //     name="username"
    //     placeholder="Username or Email"
    //     value={form.username}
    //     onChange={handleChange}
    //   />
    //   <input
    //     type="password"
    //     name="password"
    //     placeholder="Password"
    //     value={form.password}
    //     onChange={handleChange}
    //   />
    //   <button className="btn">Login</button>
    //   <p>
    //     Don't have an account? <Link to="/signup">Sign up</Link>
    //   </p>
    // </div>
    <>
    <section>
      <main>
        <div className="section-login">
          <div className="container grid grid-two-cols">
            <div className="login-image">
              <img
                src={login}
                alt="a nurse with a cute look"
                width="800"
                height="600"
              />
            </div>
            {/* our main registration code  */}
            <div className="login-form">
              <h1 className="main-heading">Login form</h1>
              
              <form onSubmit={handleSubmit}>

                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Add your registered Email"
                  />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Enter your Password"
                  />
                </div>
                
                
                <button type="submit" className="btn btn-submit">
                  Login
                </button>
                <p className="signup-link">
                 Don't have an account? <Link to="/signup">Sign up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  </>


  );
}

export default LoginPage;
