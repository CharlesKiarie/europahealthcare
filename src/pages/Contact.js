import React from 'react'
import Footer from '../components/Footer';
import ContactBox from '../components/ContactBox';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import useScrollTop from '../utils/useScrollTop';

function Contact() {
    useScrollTop();
    const bannerMsg = "Contact us";

    return (
        <div>
            <Nav/>
            <Banner bannerMsg={bannerMsg}/>
            <ContactBox/>
            <Footer/>
        </div>
    )
}

export default Contact;
