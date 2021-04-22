import React, { useRef } from "react";
import LoginForm from "./LoginForm";
import "../styles/Navbar.css";

import Holyways from "../Images/Holyways.svg";

const Navbar = () => {
  const PopUp = useRef();

  const displayPopUp = () => {
    // PopUp.current.style.background = "blue";
    // console.log(PopUp.current.style.display);
    PopUp.current.style.display = "block";
  };
  const hidePopUp = () => {
    PopUp.current.style.display = "none";
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
            onClick={displayPopUp}
          >
            Login
          </button>
          <button className="white-button navbar-register-btn">Register</button>
        </div>
      </nav>
      <LoginForm ref={PopUp} onClick={hidePopUp} />
    </div>
  );
};

export default Navbar;
