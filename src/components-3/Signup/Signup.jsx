import React, { useContext, useState } from "react";
import logo from "../../assets/logo.png";
import "./Signup.css";
import icon_1 from "../../assets/folder.png";
import icon_2 from "../../assets/secure.png";
import icon_3 from "../../assets/network.png";
import icon_4 from "../../assets/share.png";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { Context, server } from "../../main";
import toast from "react-hot-toast";

function Signup() {
  const [Identification, setIdentification] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Branch, setBranch] = useState("");
  const { isAuthenticated, setIsAuthenticated, loading, setIsLoading } = useContext(Context);

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { data } = await axios.post(
        `${server}/users/register`,
        {
          Identification,
          Email,
          Password,
          Branch,
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
            <b>Access exclusive features with an account</b>
          </h3>
          <p>This is the left side content of the card.</p>
          <ul>
            <li>
              <img src={icon_1} className="icon" alt="" />
              Unlimited access to classified dashboards
            </li>
            <li>
              <img src={icon_2} className="icon" alt="" />
              Data security is ensured for users
            </li>
            <li>
              <img src={icon_3} className="icon" alt="" />
              Access to internal network of organization
            </li>
            <li>
              <img src={icon_4} className="icon" alt="" />
              Sharable dashboards within the network
            </li>
            <li>Plus much more</li>
          </ul>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <span>
            By creating an account, I agree to Crime Insights's{" "}
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
            <b>Create an Account</b>
          </h3>
          <form onSubmit={submitHandler} className="flex">
            <label>Station Identification Number</label>
            <input
              type="text"
              value={Identification}
              onChange={(e) => setIdentification(e.target.value)}
              placeholder="Enter Identification Number"
              required
            />
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
            <label>Your State/Branch</label>
            <input
              type="text"
              value={Branch}
              onChange={(e) => setBranch(e.target.value)}
              placeholder="Enter branch name"
              required
            />
            <button disabled={loading} to="/Home" className="btn_2" type="submit">
              Sign Up
            </button>
          </form>
          <span>
            Already have an account then{" "}
            <Link className="span_ele" to={"/login"}>
              Log In Here
            </Link>
          </span>
          <br />
          <br />
          <br />
          <li>..</li>
          <li>..</li>
          <li>..</li>
          <li>..</li>
          <li>..</li>
          <li>..</li>
          <li>..</li>
          <li>..</li>
          <li>..</li>
        </div>
      </div>
    </div>
  );
}

export default Signup;
