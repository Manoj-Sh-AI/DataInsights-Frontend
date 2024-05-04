import React from 'react'
import "./About.css"
import about_img from "../../assets/istockphoto-1413286466-612x612.jpg"
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div id="about" className='about' >
      <div className='about-left'>
        <img src={about_img} alt="" className='about-img'/>
      </div>
      <div className='about-right'>
        <h3>[ ABOUT VISUALIZATION ]</h3>
        <h2>ChatBot - Samvidhan Sahayak</h2>
        <p>Introducing "Samvidhan Sahayak," your one-stop legal information chatbot! Feeling unsure about your rights under the Indian Constitution? Curious about the penalties for a specific offense in the Indian Penal Code? Samvidhan Sahayak is here to help. This user-friendly chatbot provides clear and concise answers to your queries on these foundational Indian laws. Simply type your question and Samvidhan Sahayak will search its comprehensive database to deliver relevant information, empowering you with legal knowledge. </p>
        <a href="https://apps.powerapps.com/play/e/default-5e6e043f-b14f-4f58-9b38-939a1393e404/a/de85482d-3781-4cf4-b63b-b9f594d18453?tenantId=5e6e043f-b14f-4f58-9b38-939a1393e404&hint=73c6c8d0-8028-4806-b86e-5b6293632d3d&sourcetime=1710611915265&hidenavbar=true#/" class="about_btn" data-hidden-link target="_blank">Try Now</a>
      </div>
    </div>
  )
}

export default About
