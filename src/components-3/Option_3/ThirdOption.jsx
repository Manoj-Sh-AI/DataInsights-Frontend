import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import CrimeThird from '../../components/CrimeThird/CrimeThird.jsx';
import Footer from '../../components/Footer/Footer';

const ThirdOption = () => {
  return (
    <div>
      <Navbar setSticky={true} />
      <div className='container'>
        <CrimeThird />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    </div>
  )
}

export default ThirdOption
