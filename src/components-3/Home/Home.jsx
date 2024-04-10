import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from "../../components/Hero/Hero";
import Title from '../../components/Title/Title';
import Features from '../../components/Features/Features';
import About from '../../components/About/About';
import Networks from '../../components/Networks/Networks';
import Testimonials from '../../components/Testimonials/Testimonials';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    
    
    return (
        <div>
            <Navbar />
            <Hero />
            <div className='container'>
                <Title subTitle="[ FEATURES AVAILABLE ]" title="Project Features"/>
                <Features />
                <About />
                <Title subTitle="[ THE NETWORK ]" title="Inter Connection of Infrastructures"/>
                <Networks />
                <Title subTitle="[ CONTRIBUTIONS ]" title="Project Contributers"/>
                <Testimonials />
                <Title subTitle="[ CONTACT US ]" title="Get in Touch for Queries"/>
                <Contact />
                <Footer />
            </div>
        </div>
    );
};

export default Home;
