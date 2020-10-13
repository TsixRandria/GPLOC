import React from 'react';



class Contact extends React.Component {
	render() {
		return (

			<>

				<div className="b-breadCumbs" data-wow-delay="0.5s" >
					<div className="container">
						<a href="/" className="b-breadCumbs__page">ACCUEIL</a><span className="fa fa-angle-right"></span><a href="#" className="b-breadCumbs__page m-active">Contact</a>
					</div>
				</div>

				

				<section className="b-contacts s-shadow">
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<div className="b-contacts__form">
									<header className="b-contacts__form-header s-lineDownLeft wow zoomInUp" data-wow-delay="0.5s">
										<h2 className="s-titleDet">voulez-vous contacter GP Location ?</h2> 
									</header>
									<p className=" wow zoomInUp" data-wow-delay="0.5s">Vous rencontrez une difficulté lors de votre réservation sur notre site ? Vous souhaitez nous faire part d'un bug ?</p>
									<div id="success"></div>
									<form id="contactForm" noValidate className="s-form wow zoomInUp" data-wow-delay="0.5s">
										
										<input type="text" placeholder="VOTRE NOM" defaultValue="" name="user-name" id="user-name" />
										<input type="text" placeholder="VOTRE PRENOM" defaultValue="" name="user-name" id="user-lastname" />
										<input type="text" placeholder="VOTRE ADRESSE EMAIL " defaultValue="" name="user-email" id="user-email" />
										<input type="text" placeholder="VOTRE NUMERO TELEPHONE." defaultValue="" name="user-phone" id="user-phone" />
										<textarea id="user-message" name="user-message" placeholder="COMMENTAIRE/SUGGESTIONS/FEEDBACK"></textarea>
										<button type="submit" className="btn m-btn">VALIDER    <span className="fa fa-angle-right"></span></button>
									</form>
								</div>
							</div>
							<div className="col-md-6" textAlign ="">
								<div className="b-contacts__address">
									<div className="b-contacts__address-hours">
										<h2 className="s-titleDet wow zoomInUp" data-wow-delay="0.5s">Horaires d'ouvertures</h2>
										<div className="b-contacts__address-hours-main wow zoomInUp" data-wow-delay="0.5s">
											<div className="row">
												<div className="col-md-6 col-xs-12">
													<h5>Département des locations</h5>
													<p>Lun-Ven : 8:00am - 4:00pm <br/>Le dimanche est fermé</p>
												</div>
												<div className="col-md-6 col-xs-12">
													<h5>Département des services</h5>
													<p>Lun-Ven : 8:00am - 4:00pm <br/>Le dimanche est fermé</p>
												</div>
											</div>
										</div>
									</div>
									<div className="b-contacts__address-info">
										<h2 className="s-titleDet wow zoomInUp" data-wow-delay="0.5s">A PROPOS</h2>
										<address className="b-contacts__address-info-main wow zoomInUp" data-wow-delay="0.5s">
											<div className="b-contacts__address-info-main-item">
												<span className="fa fa-home"></span>
												ADRESSE  <p>34 rue de la Plantation </p>
												
											</div>
											<div className="b-contacts__address-info-main-item">
												<div className="row">
													<div className="col-lg-3 col-md-4 col-xs-12">
														<span className="fa fa-phone"></span>
														TELEPHONE
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

				<div className="b-map wow zoomInUp" data-wow-delay="0.5s">
					<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14910.02604721598!2d55.511276!3d-20.891932!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdd91245bf0d2d552!2sGP+Location!5e0!3m2!1sfr!2sfr!4v1483431590185" width="1300" height="400" frameborder="0"																												 allowfullscreen></iframe>
				</div>

				<div className="b-features">
					<div className="container">
						<div className="row">
							<div className="col-md-9 col-md-offset-3 col-xs-6 col-xs-offset-6">
								<ul className="b-features__items">
									<li className="wow zoomInUp" data-wow-delay="0.3s" data-wow-offset="100">Merci de remplir le formulaire ci-dessus.</li>
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