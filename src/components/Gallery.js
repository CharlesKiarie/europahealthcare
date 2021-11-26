import React from 'react';
import galleryImg1 from '../assets/gallery/1.jpg';
import galleryImg2 from '../assets/gallery/2.jpg';
import galleryImg3 from '../assets/gallery/3.jpg';
import galleryImg4 from '../assets/gallery/4.jpg';
import galleryImg6 from '../assets/gallery/6.jpg';
import galleryImg7 from '../assets/gallery/10.jpg';
import galleryImg13 from '../assets/gallery/13.jpg';
import galleryImg14 from '../assets/gallery/14.jpg';


function Gallery() {
    return (
        <section className="portfolio-section portfolio-page">
			<div className="container">

            <div className="title-section">
                <h1>Gallery</h1>
            </div>

				<div className="portfolio-box iso-call">
					<div className="project-post design branding">
						<img src={galleryImg1} alt=""/>
						<div className="project-content">
							
						</div>
						<div className="hover-box">
							<a href={galleryImg1} className="zoom"><i className="fa fa-search"></i></a>
						</div>
					</div>
					<div className="project-post design photography">
						<img src={galleryImg13} alt=""/>
						<div className="project-content">
							
						</div>
						<div className="hover-box">
							<a href={galleryImg13} className="zoom"><i className="fa fa-search"></i></a>
						</div>
					</div>
					<div className="project-post photography development">
						<img src={galleryImg3} alt=""/>
						<div className="project-content">
							
						</div>
						<div className="hover-box">
							<a href={galleryImg3} className="zoom"><i className="fa fa-search"></i></a>
						</div>
					</div>
					<div className="project-post design development">
						<img src={galleryImg3} alt=""/>
						<div className="project-content">
							
						</div>
						<div className="hover-box">
							<a href={galleryImg3} className="zoom"><i className="fa fa-search"></i></a>
						</div>
					</div>
					<div className="project-post photography development">
						<img src={galleryImg6} alt=""/>
						<div className="project-content">
							
						</div>
						<div className="hover-box">
							<a href={galleryImg6} className="zoom"><i className="fa fa-search"></i></a>
						</div>
					</div>
					<div className="project-post development">
						<img src={galleryImg7} alt=""/>
						<div className="project-content">
							
						</div>
						<div className="hover-box">
							<a href={galleryImg7} className="zoom"><i className="fa fa-search"></i></a>
						</div>
					</div>
					<div className="project-post branding development">
						<img src={galleryImg4} alt=""/>
						<div className="project-content">
							
						</div>
						<div className="hover-box">
							<a href={galleryImg4} className="zoom"><i className="fa fa-search"></i></a>
						</div>
					</div>
					<div className="project-post design">
						<img src={galleryImg2} alt=""/>
						<div className="project-content">
							
						</div>
						<div className="hover-box">
							<a href={galleryImg2} className="zoom"><i className="fa fa-search"></i></a>
						</div>
					</div>
					<div className="project-post photography">
						<img src={galleryImg14} alt=""/>
						<div className="project-content">
							
						</div>
						<div className="hover-box">
							<a href={galleryImg14} className="zoom"><i className="fa fa-search"></i></a>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}

export default Gallery
