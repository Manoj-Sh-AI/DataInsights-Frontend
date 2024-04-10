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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            ipsa corporis sequi aliquid cupiditate reiciendis quas debitis
          </p>
          <Link to="/FirstOption" className="new_btn">Learn More</Link>
          <p><br /></p>
        </div>
        <div className="year">
          <h3>Crime Index of Only 2022</h3>
          <p className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            ipsa corporis sequi aliquid cupiditate reiciendis quas debitis
          </p>
          <Link to="/SecondOption" className="new_btn">Learn More</Link>
          <p><br /></p>
        </div>
        <div className="year">
          <h3>World Crime Index</h3>
          <p className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            ipsa corporis sequi aliquid cupiditate reiciendis quas debitis
          </p>
          <Link to="/ThirdOption" className="new_btn">Learn More</Link>
          <p><br /></p>
        </div>
      </div>
    </div>
  );
};

export default Years;
