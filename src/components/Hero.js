import React from 'react';
import herovid from '../assets/video.mp4';

function Hero() {
    return (
        <section className="hero-section">
            <video loop autoPlay muted id="myVideo">
                <source src={herovid} type="video/mp4"/>
            </video>
            <div className="container">
            <div className="hero-title">
                <h1>Europa Healthcare.</h1>
                <h3>Europa Healthcare Ltd. is committed to the highest standards of customer service and we consistently work towards high levels of transparency, accountability and constant value systems in all facets of our operations as a leading pharmaceutical marketing firm. We have retained our drive for growth since 1996 and have crossed several milestones to emerge as one of the largest pharmaceutical marketing companies in Kenya.</h3>
                <h3>We pride in ourselves in being the first pharmaceutical company in Kenya to receive the ISO 9001:2015 certification. Europa Healthcare Ltd. efficiently imports and distributes medicines and drugs for world class healthcare providers from Europe and India.</h3>
            </div>
            </div>
		</section>
    )
}

export default Hero;
