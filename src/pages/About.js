import React from 'react';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Nav from '../components/Nav';
import AboutBox from '../components/AboutBox';

function About() {
    const bannerMsg = "What we do";

    return (
        <div>
            <Nav/>
            <Banner bannerMsg={bannerMsg}/>
            <AboutBox/>
            <Footer/>
        </div>
    )
}

export default About;
