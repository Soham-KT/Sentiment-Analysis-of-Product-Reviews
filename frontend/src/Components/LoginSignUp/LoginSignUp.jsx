import React, { useState } from "react";
import "./LoginSignUp.css";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaLock } from "react-icons/fa";


import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const LoginSignUp = () => {
    const [visible, setVisible] = useState(false)

    return (
        <div className="container">
            <div className="header">
                <div className="text">Sign Up</div>
                <div className="underline"></div>
            </div>

            <div className="inputs">
                <div className="input">
                    <FaRegUser />
                    <input type="text" placeholder="Enter your Name" />
                </div>
                <div className="input">
                    <HiOutlineMail />
                    <input type="email"
                    placeholder="Enter your Email" />
                </div>
                <div className="input">
                    <FaLock />
                    <input placeholder="Enter your Passsword"
                    type={visible ? "text" : "password"} />
                    {visible ? (
                        <span
                            onClick={() => setVisible(false)}
                            className="eye_icon"
                        >
                            <FaEyeSlash />
                        </span>
                    ) : (
                        <span
                            onClick={() => setVisible(true)}
                            className="eye_icon"
                        >
                            <FaEye />
                        </span>
                    )}

                </div>
            </div>
            <div className="forgot-password"><span>Forgot password?</span></div>
            <div className="submit-container">
                <div className="submit">Sign Up</div>
                <div className="submit">Login </div>
            </div>
        </div>
    );
};

export default LoginSignUp;
