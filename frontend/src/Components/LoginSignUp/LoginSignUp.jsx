import React from "react";
import "./LoginSignUp.css";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaLock } from "react-icons/fa";

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const LoginSignUp = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        <div className="input">
          <FaRegUser />
          <input type="text" />
        </div>
        <div className="input">
          <HiOutlineMail />
          <input type="email" />
        </div>
        <div className="input">
          <FaLock />
          <input type="password" />
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
