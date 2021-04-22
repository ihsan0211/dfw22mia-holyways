import React, { forwardRef } from "react";
import "../styles/RegisterForm.css";
const RegisterForm = ({ hideForm, changeForm }, refs) => {
  return (
    <div ref={refs} className="DisplayManipulation">
      <div className="background-overlay" onClick={hideForm}></div>
      <div className="register-form-container">
        <h1 className="title">Register</h1>
        <form className="register-form">
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
          <input
            className="input"
            type="name"
            name="name"
            placeholder="Full Name"
          ></input>
          <button className="red-button register-form-btn">Register</button>
        </form>
        <p className="form-under">
          Already have an account ? Klik
          <button className="form-here" onClick={changeForm}>
            here
          </button>
        </p>
      </div>
    </div>
  );
};

export default forwardRef(RegisterForm);
