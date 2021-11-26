import React from 'react';
import { Link } from 'react-router-dom';

function ContactBanner() {
    return (
        <section className="ban-line-section second-style">
			<div className="container">
				<h2>
					<span>We Offer The Perfect Solutions</span>
					<Link to="/contact-us" className="button-one">Contact Us</Link>
				</h2>
			</div>
		</section>
    )
}

export default ContactBanner;
