import React, { useEffect, useState, useContext } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link, Navigate } from "react-router-dom";
import { Context, server } from "../../main";
import toast from "react-hot-toast";
import axios from "axios";

const Navbar = ({ setSticky }) => {
  const { isAuthenticated, setIsAuthenticated, loading, setIsLoading } = useContext(Context);

  const logoutHandler = async () => {
    setIsLoading(true);
    try {
      await axios.get(`${server}/users/logout`, {
        withCredentials: true,
      });

      toast.success("Logged Out Successfully!");
      setIsAuthenticated(false);
      setIsLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthenticated(true);
      setIsLoading(false);
    }
  };

  if (!isAuthenticated) return <Navigate to={"/login"} />;

  const [sticky, setStickyState] = useState(true);

  useEffect(() => {
    setStickyState(setSticky); // Set the initial sticky state based on the prop
    const handleScroll = () => {
      window.scrollY > 50 ? setStickyState(true) : setStickyState(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setSticky]);

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} className="logo" alt="" />
      <ul>
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#about">ChatBot</a>
        </li>
        <li>
          <a href="#network">Network</a>
        </li>
        <li>
          <a href="#contributers">Contributors</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
        {isAuthenticated ? (
          <button
            className="btn"
            disabled={loading}
            onClick={logoutHandler}
            style={{ fontSize: "15px" }}
          >
            Log Out
          </button>
        ) : (
          <Link to={"/login"} className="login_btn">
            <li>Log In</li>
          </Link>
        )}
        <Link to={"/my_account"}>
          <li>Profile</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
