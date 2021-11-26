import React from 'react';
import sunImg from '../assets/sunpar.png';

function SunparBox() {
    return (
        <section className="what-we-do">
			<div className="image-holder">
				<img src={sunImg} alt=""/>
			</div>
			<div className="what-we-do-upper">
				<div className="container">
					<div className="what-we-box">
						<div className="inner-content">
							<h1>Sunpar Pharmaceuticals</h1>
							<p>Sunpar Pharmaceuticals Ltd., ISO 9001:2008 certified company, was established in Kenya in 1999 and in just a few years has become one of the largest pharmaceutical Distributors in the Kenyan Market, with group sales turnover in excess of 12 million USD.The Business philosophy of Sunpar Pharmaceuticals is to represent selected pharmaceutical manufacturers from India and market their products exclusively in the Kenyan Market through a sales force of over 50 representatives. These representative cover the entire medical field of Doctors, Hospitals, Nursing Homes and Retail Chemists. In addition, Sunpar Pharmaceuticals Ltd. Has established an excellent relationship with both the Government and Non-Governmental agencies as supplier of quality health care products. </p>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}

export default SunparBox;
