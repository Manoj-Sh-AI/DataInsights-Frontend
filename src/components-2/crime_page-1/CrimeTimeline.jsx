import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import "./CrimeTimeline.css";
import Title from '../../components/Title/Title';
import Years from '../../components/Years/Years';
import Footer from '../../components/Footer/Footer';

const CrimeTimeline = () => {
  return (
    <div>
      <Navbar setSticky={true} />
    <div className='container'>
      <br />
      <Title subTitle="[RANGE OF YEARS]"/>
      <Years />

      <Footer />
    </div>
    </div>
  );
}

export default CrimeTimeline;
