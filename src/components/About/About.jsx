import React from 'react'
import "./About.css"
import about_img from "../../assets/visual.webp"
import play_icon from "../../assets/play-icon.png"

const About = () => {
  return (
    <div id="about" className='about' >
      <div className='about-left'>
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon'/>
      </div>
      <div className='about-right'>
        <h3>[ ABOUT VISUALIZATION ]</h3>
        <h2>Expanding Visualization by Using Power BI</h2>
        <p>Power BI is a powerful business analytics tool developed by Microsoft that empowers organizations to visualize and analyze their data effectively. It allows users to connect to various data sources, transform raw data into meaningful insights, and create interactive dashboards and reports. With its user-friendly interface and robust features, Power BI enables users to explore data, uncover trends, and make data-driven decisions to drive business growth. Whether you're a small business or a large enterprise, Power BI provides the flexibility and scalability to meet your analytical needs and unlock the full potential of your data.</p>
      </div>
    </div>
  )
}

export default About
