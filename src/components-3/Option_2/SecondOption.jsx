import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import CrimeSecond from '../../components/CrimeSecond/CrimeSecond.jsx';
import Footer from '../../components/Footer/Footer.jsx';
const SecondOption = () => {
  return (
    <div>
      <Navbar setSticky={true} />
      <div className='container'>
        <CrimeSecond />
        <Footer />
      </div>
    </div>
  )
}

export default SecondOption
