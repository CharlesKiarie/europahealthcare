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
					<div className="project-post">
						<img src={galleryImg1} alt=""/>
						<div className="project-content">
							
						</div>
						<div className="hover-box">
							<a href={galleryImg1} target="_blank" className="zoom" rel="noreferrer"><i className="lnr lnr-eye"></i></a>
						</div>
					</div>
					<div className="project-post">
						<img src={galleryImg13} alt=""/>
						<div className="project-content">
							
						</div>
						<div className="hover-box">
							<a href={galleryImg13} target="_blank" className="zoom" rel="noreferrer"><i className="lnr lnr-eye"></i></a>
						</div>
					</div>
					<div className="project-post">
						<img src={galleryImg3} alt=""/>
						<div className="project-content">
							
						</div>
						<div className="hover-box">
							<a href={galleryImg3} target="_blank" className="zoom" rel="noreferrer"><i className="lnr lnr-eye"></i></a>
						</div>
					</div>
					<div className="project-post">
						<img src={galleryImg3} alt=""/>
						<div className="project-content">
							
						</div>
						<div className="hover-box">
							<a href={galleryImg3} target="_blank" className="zoom" rel="noreferrer"><i className="lnr lnr-eye"></i></a>
						</div>
					</div>
					<div className="project-post">
						<img src={galleryImg6} alt=""/>
						<div className="project-content">
							
						</div>
						<div className="hover-box">
							<a href={galleryImg6} target="_blank" className="zoom" rel="noreferrer"><i className="lnr lnr-eye"></i></a>
						</div>
					</div>
					<div className="project-post">
						<img src={galleryImg7} alt=""/>
						<div className="project-content">
							
						</div>
						<div className="hover-box">
							<a href={galleryImg7} target="_blank" className="zoom" rel="noreferrer"><i className="lnr lnr-eye"></i></a>
						</div>
					</div>
					<div className="project-post">
						<img src={galleryImg4} alt=""/>
						<div className="project-content">
							
						</div>
						<div className="hover-box">
							<a href={galleryImg4} target="_blank" className="zoom" rel="noreferrer"><i className="lnr lnr-eye"></i></a>
						</div>
					</div>
					<div className="project-post">
						<img src={galleryImg2} alt=""/>
						<div className="project-content">
							
						</div>
						<div className="hover-box">
							<a href={galleryImg2} target="_blank" className="zoom" rel="noreferrer"><i className="lnr lnr-eye"></i></a>
						</div>
					</div>
					<div className="project-post">
						<img src={galleryImg14} alt=""/>
						<div className="project-content">
							
						</div>
						<div className="hover-box">
							<a href={galleryImg14} target="_blank" className="zoom" rel="noreferrer"><i className="lnr lnr-eye"></i></a>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}

export default Gallery
