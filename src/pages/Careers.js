import React from 'react';
import Footer from '../components/Footer';
import CareerBox from '../components/CareerBox';
import Nav from '../components/Nav';
import Banner from '../components/Banner';

function Careers() {
    const bannerMsg = "Work with us";

    return (
        <div>
            <Nav/>
            <Banner bannerMsg={bannerMsg}/>
            <CareerBox/>
            <Footer/>
        </div>
    )
}

export default Careers;