import React from 'react';
import profileImg from '../assets/ashwin2.png';

function Quote() {
    return (
        <section className="testimonial-section">
			<div className="container">
				<i className="fa fa-quote-left" aria-hidden="true"></i>
				<div className="testimonial-box owl-wrapper">
						<div className="item">
							<div className="testimonial-post">
								<p>At Europa Healthcare Limited we strive to identify and develop a clear and concise technique of conducting business and ensuring that customer satisfaction is achieved through supplying only the highest quality of pharmaceutical products in the market.</p>
								<img src={profileImg} alt=""/>
								<h2>Ashwin Kotadia</h2>
								<a href="http://europakenya.com/wp-content/uploads/2018/11/Company-Profile.pdf" target="_blank" rel="noreferrer">Download Company Profile</a>
							</div>
						</div>
				</div>
			</div>
		</section>
    )
}

export default Quote;
