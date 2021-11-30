import React from 'react';
import useScrollTop from '../utils/useScrollTop';
import ContactBanner from '../components/ContactBanner';
import Faq from '../components/Faq';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import Hero from '../components/Hero';
import Nav from '../components/Nav';
import ProductOffers from '../components/ProductOffers';
import Quote from '../components/Quote';

function Home() {
    useScrollTop();

    return (
        <div>
            <Nav/>
            <Hero/>
            <Quote/>
            <ProductOffers/>
            <ContactBanner/>
            <Gallery/>
            <Faq/>
            <ContactBanner/>
            <Footer/>
        </div>
    )
}

export default Home
