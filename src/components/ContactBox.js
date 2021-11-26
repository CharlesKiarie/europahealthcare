import React from 'react'

function ContactBox() {
    return (
        <section className="contact-section">
			<div className="container">
				<div className="contact-box">
					<div className="row">
						<div className="col-md-8">
							<div id="map">
							<iframe title="myFrame" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.368286561625!2d36.7975434!3d-1.2675064!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x82d67b5d8cf43f4!2sEUROPA%20TOWERS!5e0!3m2!1sen!2ske!4v1637405514146!5m2!1sen!2ske" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
							</div>
							
						</div>
						<div className="col-md-4">
							<div className="contact-details">
								<h2>We are here for you</h2>
								<p>Have a question? Feel free to reach out to us using the information below. </p>
							</div>
							<div className="contact-details">
								<h2>Contact Details</h2>
								<ul className="info-list">
									<li>
										<i className="fa fa-map-marker"></i>
										Europa Towers Westlands,Nairobi,Kenya
									</li>
									<li>
										<i className="fa fa-phone"></i>
										+254 722 206200 /+254 722206577
									</li>
									<li>
										<i className="fa fa-envelope"></i>
										info@europakenya.com 
									</li>
								</ul>
							</div>

						</div>
					</div>
				</div>
			</div>
		</section>
    )
}

export default ContactBox
