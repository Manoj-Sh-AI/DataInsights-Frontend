import React from 'react';
import "./Hero.css";
import dark_arrow from '../../assets/dark-arrow.png'
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <div id="hero" className='hero container'>
      <div className='hero-text'>
        <h1>We Ensure Better Analytics for a Better World</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident alias optio commodi, hic odit quia facilis harum veritatis voluptates impedit et deleniti aut id mollitia tenetur quasi obcaecati? Cumque?</p>
        <Link to="/CrimeTimeline" className='btn'>Explore More <img src={dark_arrow} alt="" /></Link>
      </div>
    </div>
  )
}

export default Hero
