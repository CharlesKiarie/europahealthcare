import React from 'react';

function Banner({bannerMsg}) {
    return (
        <section className="page-banner-section about-banner">
			<div className="container">
				<div className="page-banner-box">
					<h1>{bannerMsg}</h1>
				</div>
			</div>
		</section>
    )
}

export default Banner;
