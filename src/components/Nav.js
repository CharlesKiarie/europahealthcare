import React from 'react';
import logo from '../assets/eur-logo.png';
import { Link } from 'react-router-dom';

function Nav() {
    return (
            <header className="clearfix">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">

                        <a className="navbar-brand" href="index.html">
                            <img src={logo} alt=""/>
                        </a>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav m-auto">
                                <li><Link className="active" to="/">Home</Link></li>
                                <li><Link to="/products">Products</Link></li>
                                <li><Link to="/about-us">About Us</Link></li>
                                <li><Link to="/careers">Careers</Link></li>
                                <li><Link to="/contact-us">Contacts</Link></li>
                                <li><Link to="/sunpar">Sunpar</Link></li>    
                            </ul>
                            <a href="/#" className="open-close-menu"><i className="fa fa-align-justify"></i></a>
                        </div>
                    </div>
                </nav>
            </header>            
    )
}

export default Nav;
