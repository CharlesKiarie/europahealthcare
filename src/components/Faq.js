import React from 'react';

function Faq() {
    return (
        <section className="news-section">
			<div className="container">
				<div className="title-section">
					<h1>FAQ</h1>
					<p>Some frequently asked questions... <br/>Feel free to contact us with more questions </p>
				</div>

						<div className="item">
							<div className="news-post">
								<h2>Q1. What are the requirements for cash purchases at Europa Healthcare Limited?</h2>
								<p>Walk-in cash customers would require a prescription from a qualified doctor and a copy of his/ her identity card.</p>
							</div>
						</div>
                        <div className="item">
							<div className="news-post">
								<h2>Q2. What are the requirements for Cash or Cheque on Delivery Account Opening?</h2>
								<p>COD and CHOD accounts would require a certificate of registration and a current pharmacists certificate.</p>
							</div>
						</div>
                        <div className="item">
							<div className="news-post">
								<h2>Q3. What are the requirements for opening a regular account?</h2>
								<p>Opening a regular account requires a duly filled Credit form, a current premises registration certificate, a wholesale or retail license, a pharmacist registration certificate and a request for credit facilities letter.</p>
							</div>
						</div>
			</div>
		</section>
    )
}

export default Faq;
