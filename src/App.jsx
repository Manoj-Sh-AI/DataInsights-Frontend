import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components-3/Home/Home";
import Login from "./components-3/Login/Login";
import Signup from "./components-3/Signup/Signup";
import Profile from "./components/Profile/Profile";
import CrimeTimeline from "./components-2/crime_page-1/CrimeTimeline";
import FirstOption from "./components-3/Option_1/FirstOption";
import SecondOption from "./components-3/Option_2/SecondOption";
import ThirdOption from "./components-3/Option_3/ThirdOption";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Signup />}></Route>
        <Route path="/CrimeTimeline" element={<CrimeTimeline />}></Route>
        <Route path="/FirstOption" element={<FirstOption />}></Route>
        <Route path="/SecondOption" element={<SecondOption />}></Route>
        <Route path="/ThirdOption" element={<ThirdOption />}></Route>
      </Routes>
      <Toaster />
    </Router>
  );
};

export default App;
