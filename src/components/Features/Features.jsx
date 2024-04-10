import React from 'react';
import "./Features.css";
import program_icon_1 from "../../assets/graph.png";
import program_icon_2 from "../../assets/natural-language-processing.png";
import program_icon_3 from "../../assets/forecast.png";
import program_icon_4 from "../../assets/filter.png";
import program_icon_5 from "../../assets/map.png";
import program_icon_6 from "../../assets/security.png";

const Features = () => {
  return (
    <div>
      <div id='features' className='features' >
        <div className="feature">
          <img src={program_icon_1} className='features_symbol' alt="" />
          <h3>Data Visualizer</h3>
          <p>Transforming raw data into captivating visuals, painting insights at a glance. Elevate your understanding with our immersive data visualization experience. <br /><br /><br /></p>
        </div>
        <div className="feature">
          <img src={program_icon_2} className='features_symbol' alt="" />
          <h3>NLP</h3>
          <p>Unlock the power of language with our NLP solutions, bridging understanding and action seamlessly. Dive into the depths of human communication with our cutting-edge NLP technology.<br /><br /></p>

        </div>
        <div className="feature">
          <img src={program_icon_3} className='features_symbol' alt="" />
          <h3>Predictive System</h3>
          <p>Anticipate tomorrow's outcomes today with our predictive system, harnessing data to forecast with precision. Empower your decisions with insights from our predictive system, shaping a proactive future.</p>

        </div>
      </div>
      <div className='features'>
        <div className="feature">
          <img src={program_icon_4} className='features_symbol' alt="" />
          <h3>Filters</h3>
          <p>Refine your content effortlessly with our advanced filtering system, ensuring personalized experiences. Simplify information overload with our intuitive filters, tailoring content to your preferences.<br /><br /></p>
        </div>
        <div className="feature">
          <img src={program_icon_5} className='features_symbol' alt="" />
          <h3>Maps</h3>
          <p>Navigate through possibilities with our interactive maps, transforming data into insightful geography. Explore the world visually with our dynamic mapping tools, illuminating connections and opportunities.<br /><br /></p>
        </div>
        <div className="feature">
          <img src={program_icon_6} className='features_symbol' alt="" />
          <h3>Privacy and Security</h3>
          <p>Safeguard your data with our multi-layered security protocols, ensuring peace of mind for both users and administrators. Protect your online presence with our fortified website security measures, empowering admins with robust privacy controls.</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
