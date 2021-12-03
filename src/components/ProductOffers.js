import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'
import dermaImg from '../assets/products/dermatology.jpg';
import antiflamatoryImg from '../assets/products/antiflamatory.jpg';
import neuroImg from '../assets/products/neouro.jpg';
import herbalsImg from '../assets/products/herbals.jpg';
import antiSepticImg from '../assets/products/antiseptic.jpg';
import coughSyrupImg from '../assets/products/coughsyrup.jpg';
import { Link } from 'react-router-dom';

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
				<OwlCarousel className='owl-theme container' center loop autoplay>
				<div className="product-item">
						<div className="project-post">
							<img src={dermaImg} alt=""/>
							<div className="project-content">
								<h2><Link to="/products">Dermatological products</Link></h2>
								<span>Gels / Ointments</span>
							</div>
							<div className="hover-box">
								<a href={dermaImg} target="_blank" className="zoom" rel="noreferrer"><span className="lnr lnr-eye"></span></a>
							</div>
						</div>
					</div>
				
					<div className="item">
						<div className="project-post product-item">
							<img src={antiflamatoryImg} alt=""/>
							<div className="project-content">
								<h2><Link to="/products">Antiflamatory</Link></h2>
								<span>Tablets / Gels</span>
							</div>
							<div className="hover-box">
								<a href={antiflamatoryImg} target="_blank" className="zoom" rel="noreferrer"><span className="lnr lnr-eye"></span></a>
							</div>
						</div>
					</div>
				
					<div className="item">
						<div className="project-post product-item">
							<img src={neuroImg} alt=""/>
							<div className="project-content">
								<h2><Link to="/products">Neuro psychiatry</Link></h2>
								<span>Tablets / Capsules</span>
							</div>
							<div className="hover-box">
								<a href={neuroImg} target="_blank" className="zoom" rel="noreferrer"><span className="lnr lnr-eye"></span></a>
							</div>
						</div>
					</div>

					<div className="item">
						<div className="project-post product-item">
							<img src={herbalsImg} alt=""/>
							<div className="project-content">
								<h2><Link to="/products">Herbals</Link></h2>
								<span>Syrups / Tablets</span>
							</div>
							<div className="hover-box">
								<a href={herbalsImg} target="_blank" className="zoom" rel="noreferrer"><span className="lnr lnr-eye"></span></a>
							</div>
						</div>
					</div>

					<div className="item">
						<div className="project-post product-item">
							<img src={antiSepticImg} alt=""/>
							<div className="project-content">
								<h2><Link to="/products">Antiseptic</Link></h2>
								<span>Liquids / Surgical scrubs</span>
							</div>
							<div className="hover-box">
								<a href={antiSepticImg} target="_blank" className="zoom" rel="noreferrer"><span className="lnr lnr-eye"></span></a>
							</div>
						</div>
					</div>

					<div className="item">
						<div className="project-post product-item">
							<img src={coughSyrupImg} alt=""/>
							<div className="project-content">
								<h2><Link to="/products">Cough Syrup</Link></h2>
								<span>Syrup</span>
							</div>
							<div className="hover-box">
								<a href={coughSyrupImg} target="_blank" className="zoom" rel="noreferrer"><span className="lnr lnr-eye"></span></a>
							</div>
						</div>
					</div>
				</OwlCarousel>
			</div>
		</section>
    )
}

export default ProductOffers;
