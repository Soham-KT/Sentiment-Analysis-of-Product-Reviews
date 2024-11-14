// src/pages/SignupPage.js
import React, { useState } from "react";
import "../styles/SignUp.css";
import register from "../assets/register.png";
import { Link } from "react-router-dom";

function SignupPage() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (response.ok) {
        console.log("Registration successful:", data);
        // Clear the form or redirect as needed
        setForm({ username: "", email: "", password: "", confirmPassword: "" });
      } else {
        console.error("Registration error:", data.message);
      }
    } catch (error) {
      console.error("Signup error:", error);
    }
  };
  
  return (
    // <div className="container">
    //   <h2>Sign Up</h2>
    //   <input
    //     type="text"
    //     name="username"
    //     placeholder="Username"
    //     value={form.username}
    //     onChange={handleChange}
    //   />
    //   <input
    //     type="email"
    //     name="email"
    //     placeholder="Email"
    //     value={form.email}
    //     onChange={handleChange}
    //   />
    //   <input
    //     type="password"
    //     name="password"
    //     placeholder="Password"
    //     value={form.password}
    //     onChange={handleChange}
    //   />
    //   <input
    //     type="password"
    //     name="confirmPassword"
    //     placeholder="Confirm Password"
    //     value={form.confirmPassword}
    //     onChange={handleChange}
    //   />
    //   <button className="btn">Sign Up</button>
    //   <p>
    //     Already have an account? <a href="/">Log in</a>
    //   </p>
    // </div>

    <>
      <section>
        <main>
          <div className="section-signup">
            <div className="container grid grid-two-cols">
              <div className="signup-image">
                <img
                  src={register}
                  alt="a nurse with a cute look"
                  width="800"
                  height="600"
                />
              </div>
              {/* our main registration code  */}
              <div className="signup-form">
                <h1 className="main-heading">SignUp form</h1>

                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      name="username"
                      value={form.username}
                      onChange={handleChange}
                      placeholder="Add username "
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Add Email"
                    />
                  </div>
                  <div>
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      placeholder="create Password"
                    />
                  </div>
                  <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={form.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm Password"
                    />
                  </div>

                  <button type="submit" className="btn btn-submit">
                    Sign Up
                  </button>
                  <p className="login-link">
                    Already have an account? <Link to="/login">Login</Link>
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

export default SignupPage;
