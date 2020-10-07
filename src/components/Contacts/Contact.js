import React from 'react';



class Contact extends React.Component {
	render() {
		return (

			<>

				<div className="b-breadCumbs" data-wow-delay="0.5s" >
					<div className="container">
						<a href="/" className="b-breadCumbs__page">Home</a><span className="fa fa-angle-right"></span><a href="contacts.html" className="b-breadCumbs__page m-active">Contact Us</a>
					</div>
				</div>

				<div className="b-map wow zoomInUp" data-wow-delay="0.5s">
					<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14910.02604721598!2d55.511276!3d-20.891932!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdd91245bf0d2d552!2sGP+Location!5e0!3m2!1sfr!2sfr!4v1483431590185" width="1500" height="400" frameborder="0"																												 allowfullscreen></iframe>
				</div>

				<section className="b-contacts s-shadow">
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<div className="b-contacts__form">
									<header className="b-contacts__form-header s-lineDownLeft wow zoomInUp" data-wow-delay="0.5s">
										<h2 className="s-titleDet">Vous voulez contacter GP Location ?</h2> 
									</header>
									<p className=" wow zoomInUp" data-wow-delay="0.5s">Vous rencontrez une difficulté lors de votre réservation sur notre site ? Vous souhaitez nous faire part d'un bug ?</p>
									<div id="success"></div>
									<form id="contactForm" noValidate className="s-form wow zoomInUp" data-wow-delay="0.5s">
										<div className="s-relative">
											<select name="user-topic" id="user-topic" className="m-select">
												<option defaultValue="Not select">SELECT A TOPIC</option>
												<option defaultValue="Topic 1">TOPIC 1</option>
												<option defaultValue="Topic 2">TOPIC 2</option>
												<option defaultValue="Topic 3">TOPIC 3</option>
												<option defaultValue="Topic 4">TOPIC 4</option>
											</select>
											<span className="fa fa-caret-down"></span>
										</div>
										<input type="text" placeholder="VOTRE NOM" defaultValue="" name="user-name" id="user-name" />
										<input type="text" placeholder="VOTRE ADDRESS EMAIL %" defaultValue="" name="user-email" id="user-email" />
										<input type="text" placeholder="VOTRE NUMERO TELEPHONE." defaultValue="" name="user-phone" id="user-phone" />
										<textarea id="user-message" name="user-message" placeholder="COMMENTAIRE/SUGGESTIONS/FEEDBACK"></textarea>
										<button type="submit" className="btn m-btn">SUBMIT NOW<span className="fa fa-angle-right"></span></button>
									</form>
								</div>
							</div>
							<div className="col-md-6" textAlign ="">
								<div className="b-contacts__address">
									<div className="b-contacts__address-hours">
										<h2 className="s-titleDet wow zoomInUp" data-wow-delay="0.5s">Heure d'ouverture</h2>
										<div className="b-contacts__address-hours-main wow zoomInUp" data-wow-delay="0.5s">
											<div className="row">
												<div className="col-md-6 col-xs-12">
													<h5>Sales Department</h5>
													<p>Mon-Sat : 8:00am - 5:00pm <br/>Sunday is closed</p>
												</div>
												<div className="col-md-6 col-xs-12">
													<h5>Service Department</h5>
													<p>Mon-Sat : 8:00am - 5:00pm <br/>Sunday is closed</p>
												</div>
											</div>
										</div>
									</div>
									<div className="b-contacts__address-info">
										<h2 className="s-titleDet wow zoomInUp" data-wow-delay="0.5s">opening hours</h2>
										<address className="b-contacts__address-info-main wow zoomInUp" data-wow-delay="0.5s">
											<div className="b-contacts__address-info-main-item">
												<span className="fa fa-home"></span>
												ADDRESS
												<p>202 W 7th St, Suite 233 Los Angeles, California 90014 USA</p>
											</div>
											<div className="b-contacts__address-info-main-item">
												<div className="row">
													<div className="col-lg-3 col-md-4 col-xs-12">
														<span className="fa fa-phone"></span>
														PHONE
													</div>
													<div className="col-lg-9 col-md-8 col-xs-12">
														<em>06 92 370 380</em>
													</div>
												</div>
											</div>
											<div className="b-contacts__address-info-main-item">
												<div className="row">
													<div className="col-lg-3 col-md-4 col-xs-12">
														<span className="fa fa-fax"></span>
														FAX
													</div>
													<div className="col-lg-9 col-md-8 col-xs-12">
														<em>000 00 000 00</em>
													</div>
												</div>
											</div>
											<div className="b-contacts__address-info-main-item">
												<div className="row">
													<div className="col-lg-3 col-md-4 col-xs-12">
														<span className="fa fa-envelope"></span>
														EMAIL
													</div>
													<div className="col-lg-9 col-md-8 col-xs-12">
														<em>gplocation@gmail.com</em>
													</div>
												</div>
											</div>
										</address>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<div className="b-features">
					<div className="container">
						<div className="row">
							<div className="col-md-9 col-md-offset-3 col-xs-6 col-xs-offset-6">
								<ul className="b-features__items">
									<li className="wow zoomInUp" data-wow-delay="0.3s" data-wow-offset="100">Low Prices, No Haggling</li>
									<li className="wow zoomInUp" data-wow-delay="0.3s" data-wow-offset="100">Largest Car Dealership</li>
									<li className="wow zoomInUp" data-wow-delay="0.3s" data-wow-offset="100">Multipoint Safety Check</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</>

		)
	}
}


export default Contact;