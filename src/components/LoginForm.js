import React, { forwardRef } from "react";
import "../styles/LoginForm.css";
const LoginForm = ({ hideForm, changeForm }, refs) => {
  return (
    <div ref={refs} className="DisplayManipulation">
      <div className="background-overlay" onClick={hideForm}></div>
      <div className="login-form-container">
        <h1 className="title">Login</h1>
        <form className="login-form">
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Email"
          ></input>
          <input
            className="input"
            type="password"
            name="password"
            placeholder="Password"
          ></input>
          <button className="red-button login-form-btn">Login</button>
        </form>
        <p className="form-under">
          Don't have an account ? Klik
          <button className="form-here" onClick={changeForm}>
            here
          </button>
        </p>
      </div>
    </div>
  );
};

export default forwardRef(LoginForm);
