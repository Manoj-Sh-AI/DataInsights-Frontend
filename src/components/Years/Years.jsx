import React from "react";
import "./Years.css"
import { Link } from "react-router-dom";

const Years = () => {
  return (
    <div>
      <h2>Please Selelect the <a className="Timeline">Timeline</a> of Crimes</h2>
      <div className="years">
        <div className="year">
          <h3>Between (2009-2022)</h3>
          <p className="para">
            Crime analysis ranging from 2009 to 2022, which contains different types of crimes.
          </p>
          <Link to="/FirstOption" className="new_btn">Learn More</Link>
          <p><br /></p>
        </div>
        <div className="year">
          <h3>Crime Index of Only 2022</h3>
          <p className="para">
            Crime analysis ranging of 2022, which contains different types of crimes.
          </p>
          <Link to="/SecondOption" className="new_btn">Learn More</Link>
          <p><br /></p>
        </div>
        <div className="year">
          <h3>World Crime Index</h3>
          <p className="para">
            World crime index ranging from 1990 to 2022 Century.
          </p>
          <Link to="/ThirdOption" className="new_btn">Learn More</Link>
          <p><br /></p>
        </div>
      </div>
    </div>
  );
};

export default Years;
