import React from 'react';
import Footer from '../components/Footer';
import SunparBox from '../components/SunparBox';
import Nav from '../components/Nav';
import Banner from '../components/Banner';

function Sunpar() {
    const bannerMsg = "Sunpar Pharmaceuticals";

    return (
        <div>
            <Nav/>
            <Banner bannerMsg={bannerMsg}/>
            <SunparBox/>
            <Footer/>
        </div>
    )
}

export default Sunpar;
