import React from 'react'
import Footer from '../components/Footer';
import ContactBox from '../components/ContactBox';
import Nav from '../components/Nav';
import Banner from '../components/Banner';

function Contact() {
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
