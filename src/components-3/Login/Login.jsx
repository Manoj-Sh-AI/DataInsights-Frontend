import React, { useContext, useState } from "react";
import logo from "../../assets/logo.png";
import "./Login.css";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context, server } from "../../main";
import toast from "react-hot-toast";

function Login() {
  const { isAuthenticated, setIsAuthenticated, loading, setIsLoading  } = useContext(Context);
  console.log(isAuthenticated);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const submitHandler = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${server}/users/login`,
        {
          Email,
          Password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      toast.success(data.message);
      setIsAuthenticated(true);
      setIsLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthenticated(false);
      setIsLoading(false);
    }
  };

  if (isAuthenticated) return <Navigate to={"/"} />;

  return (
    <div
      style={{ backgroundColor: "#212EA0", height: "100vh" }}
      className="login container"
    >
      <img src={logo} className="logo" alt="" />
      <div className="card-container">
        <div className="login-col">
          <h3>
            <b>Welcome back!</b>
          </h3>
          <p>
            Log in for uninterrupted access to your personalized dashboards and
            exclusive network features in Data Insights!
          </p>
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
          <h3>
            <b>Login into your Account</b>
          </h3>
          <form className="flex" onSubmit={submitHandler}>
            <label>Your Official Email</label>
            <input
              type="email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter offecial email"
              required
            />
            <label>Your Password</label>
            <input
              type="password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
            <button type="submit" className="btn_2">
              Login Now
            </button>
            <p className="or">
              <b>Or</b>
            </p>
            <Link to={"/register"} className="btn_3">
              Sign Up
            </Link>
            <span>Dont have an account! please Sign up</span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
