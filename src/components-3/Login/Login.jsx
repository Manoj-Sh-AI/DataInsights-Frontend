import React, { useState } from "react";
import logo from "../../assets/logo.png";
import "./Login.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Login() {

  return (
    <div
      style={{ backgroundColor: "#212EA0", height: "100vh" }}
      className="login container"
    >
      <img src={logo} className="logo" alt="" />
      <div className="card-container">
        <div className="login-col">
          <h3><b>Welcome back!</b></h3>
          <p>Log in for uninterrupted access to your personalized dashboards and exclusive network features in Data Insights!</p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <span>
            By logging in, I agree to Crime Insights's{" "}
            <a className="color-span" href="#">
              Website Terms, Privacy Policy,
            </a>{" "}
            and{" "}
            <a className="color-span" href="#">
              Licencing Terms
            </a>
          </span>
        </div>
        <div className="card-right login-col">
          <h3><b>Login into your Account</b></h3>
          <form className="flex">
            <label>Your Offecial Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter offecial email"
              required
            />
            <label>Your Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              required
            />
            <button type="submit" className="btn_2">Login Now</button>
            <p className="or"><b>Or</b></p>
            <Link to={"/register"} className="btn_3">Sign Up</Link>
            <span>Dont have an account! please Sign up</span>
          </form>
          </div>
        </div>

    </div>
  );
}

export default Login;
