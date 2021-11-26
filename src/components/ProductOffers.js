import React from 'react';
import dermaImg from '../assets/products/dermatology.jpg';
import antiflamatoryImg from '../assets/products/antiflamatory.jpg';
import neuroImg from '../assets/products/neouro.jpg';
import cardioImg from '../assets/products/cardiovascular.jpg';

function ProductOffers() {
    return (
        <section className="portfolio-section">
			<div className="container">
				<div className="title-section">
					<h1>Products</h1>
					<p>For offers please contact us </p>
				</div>
			</div>
			<div className="portfolio-box">
				<div className="project-post">
					<img src={dermaImg} alt=""/>
					<div className="project-content">
						<h2><a href="single-project.html">Dermatological products</a></h2>
						<span>Gels / Ointments</span>
					</div>
					<div className="hover-box">
						<a href={dermaImg} className="zoom"><span className="lnr lnr-magnifier"></span></a>
					</div>
				</div>
				<div className="project-post">
					<img src={antiflamatoryImg} alt=""/>
					<div className="project-content">
						<h2><a href="single-project.html">Antiflamatory</a></h2>
						<span>Tablets / Gels</span>
					</div>
					<div className="hover-box">
						<a href={antiflamatoryImg} className="zoom"><span className="lnr lnr-magnifier"></span></a>
					</div>
				</div>
				<div className="project-post">
					<img src={neuroImg} alt=""/>
					<div className="project-content">
						<h2><a href="single-project.html">Neuro psychiatry</a></h2>
						<span>Tablets / Capsules</span>
					</div>
					<div className="hover-box">
						<a href={neuroImg} className="zoom"><span className="lnr lnr-magnifier"></span></a>
					</div>
				</div>
				<div className="project-post">
					<img src={cardioImg} alt=""/>
					<div className="project-content">
						<h2><a href="single-project.html">Cardiovascular</a></h2>
						<span>Capsules / Tablets</span>
					</div>
					<div className="hover-box">
						<a href={cardioImg} className="zoom"><span className="lnr lnr-magnifier"></span></a>
					</div>
				</div>
			</div>
		</section>
    )
}

export default ProductOffers;
