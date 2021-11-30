import React from 'react';
import useScrollTop from '../utils/useScrollTop';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import ProductBox from '../components/ProductBox';

function Products() {
    useScrollTop();
    const bannerMsg = "All Products & Manufacturers";
     
    return (
        <div>
            <Nav/>
            <Banner bannerMsg={bannerMsg}/>
            <ProductBox/>
            <Footer/>
        </div>
    )
}

export default Products;
