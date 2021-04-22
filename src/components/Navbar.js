import React, { useRef } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

import "../styles/Navbar.css";

import Holyways from "../Images/Holyways.svg";

const Navbar = () => {
  const popupLoginForm = useRef();
  const popupRegisterForm = useRef();

  const changeToRegisterForm = () => {
    popupLoginForm.current.style.display = "none";
    popupRegisterForm.current.style.display = "block";
  };
  const changeToLoginForm = () => {
    popupRegisterForm.current.style.display = "none";
    popupLoginForm.current.style.display = "block";
  };

  return (
    <div>
      <nav className="navbar-container">
        <a href="#">
          <img src={Holyways} className="navbar-logo" />
        </a>
        <div>
          <button
            className="red-button navbar-login-btn"
            onClick={() => (popupLoginForm.current.style.display = "block")}
          >
            Login
          </button>
          <button
            className="white-button navbar-register-btn"
            onClick={() => (popupRegisterForm.current.style.display = "block")}
          >
            Register
          </button>
        </div>
      </nav>
      <LoginForm
        ref={popupLoginForm}
        hideForm={() => (popupLoginForm.current.style.display = "none")}
        changeForm={changeToRegisterForm}
      />
      <RegisterForm
        ref={popupRegisterForm}
        hideForm={() => (popupRegisterForm.current.style.display = "none")}
        changeForm={changeToLoginForm}
      />
    </div>
  );
};

export default Navbar;
