import React from 'react';
import "./Hero.css";
import dark_arrow from '../../assets/dark-arrow.png'
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <div id="hero" className='hero container'>
      <div className='hero-text'>
        <h1>We Ensure Better Analytics for a Better World</h1>
        <p>Empowering progress through insightful data analysis, we pave the way for a brighter future. Our commitment to superior analytics drives positive change across industries and communities. Unlocking the potential of data, we strive for a world where informed decisions lead to impactful outcomes.</p>
        <Link to="/CrimeTimeline" className='btn'>Explore More <img src={dark_arrow} alt="" /></Link>
      </div>
    </div>
  )
}

export default Hero
