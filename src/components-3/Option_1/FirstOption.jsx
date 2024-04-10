import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import "./FirstOption.css"
import Footer from '../../components/Footer/Footer.jsx';
import FirstCrime from '../../components/FirstCrime/FirstCrime.jsx';


const FirstOption = () => {
  return (
    <div>
      <Navbar setSticky={true} />
      <div className='container'>
        <FirstCrime />
        <Footer />
      </div>
    </div>
  )
}

export default FirstOption
