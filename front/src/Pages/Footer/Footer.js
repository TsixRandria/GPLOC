import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

class Footer extends React.Component {
	render() {
		return (
			<>
				<div>
					<div className="b-info">
						<div className="container">
							<div className="row">
								<div className="col-md-3 col-xs-6">
									<aside className="b-info__aside wow zoomInLeft" data-wow-delay="0.3s">
										<article className="b-info__aside-article">
											<h3>Les avantages</h3>
											<div className="b-info__aside-article-item">
												
												<ul className="text">
													<li>Prise en charge à l'aéroport ou au port avec votre véhicule</li>
													<li>Kilométrage illimité, assurances incluses</li>
													<li>Assistance 7j/7, 24h/24</li>
													<li>Large choix de véhicules récents</li>
													<li>Ouvert 7j/7 y compris jours fériés</li>
												</ul>
											</div>
											
										</article>
										<article className="b-info__aside-article">
											<h3>Réservez 7j/7 24h/24</h3>
											<p>Avec le kilométrage illimité inclus dans notre offre de location, vous pourrez sillonner l'île d'un bout à l'autre sereinement.
											</p>
										</article>
									</aside>
								</div>
							<div className="col-md-3 col-xs-6">
									<address className="b-info__contacts wow slideInUp" data-wow-delay="0.3s">
										<p>Location de véhicules</p>
										<div className="b-info__contacts-item">
				 				           <a href="/Voitures" className="text">Nos voitures</a>
										</div>
										<div className="b-info__contacts-item">
				 				           <a href="/Condition" className="text">Conditions générales de location</a>
										</div>
										<div className="b-info__contacts-item">											
				 				           <a href="/Signup" className="text">Espace client</a>
										</div>
									</address>
								</div>
								<div className="col-md-3 col-xs-6">
									<address className="b-info__contacts wow slideInUp" data-wow-delay="0.3s">
										<p>GP Location</p>
										<div className="b-info__contacts-item">
											<span className="fa fa-map-marker"></span>
											<em>34
											rue de la Plantation</em>
										</div>
										<div className="b-info__contacts-item">
											<span className="fa fa-phone"></span>
											<em>06 92 370 380</em>
										</div>
										<div className="b-info__contacts-item">											
											<span className="fa fa-fax"></span>
											<em>97438 Sainte Marie</em>
										</div>
										<div className="b-info__contacts-item">
											<span className="fa fa-envelope"></span>
				 				           <a href="/Contact" className="text">Contact</a>
										</div>
									</address>
									<address className="b-info__map"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14910.02604721598!2d55.511276!3d-20.891932!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdd91245bf0d2d552!2sGP+Location!5e0!3m2!1sfr!2sfr!4v1483431590185" width="264" height="144" frameborder="0" allowfullscreen></iframe>
									</address>
								</div>
								<div className="col-md-3 col-xs-6">
									<address className="b-info__contacts wow slideInUp" data-wow-delay="0.3s">
										<p>Prise en charge</p>
										<div className="b-info__contacts-item">
				 				           <a href="/Aeroport" className="text">Aéroport de la Réunion Roland-Garros</a>
										</div>
										<div className="b-info__contacts-item">
				 				           <a href="/Saint" className="text">Sainte-Marie</a>
										</div>
										<div className="b-info__contacts-item">											
				 				           <a href="/Mentions-légales" className="text">Mentions légales</a>
										</div>
									</address>
									
								</div>
							</div>
						</div>

					</div>


					<footer className="b-footer">
						<a id="to-top" href="#this-is-top"><i className="fa fa-chevron-up"></i></a>
						<div className="container">
							<div className="row">
								<div className="col-xs-4">
									<div className="b-footer__company wow slideInLeft" data-wow-delay="0.3s">
										<div className="b-nav__logo">
											<h3><a href="home.html">GP<span>Location</span></a></h3>
										</div>
										<p>Location de voiture à la Reunion .</p>
									</div>
								</div>
								<div className="col-xs-8">
									<div className="b-footer__content wow slideInRight" data-wow-delay="0.3s">
										<div className="b-footer__content-social">
											<a href="#"><span className="fa fa-facebook-square"></span></a>
											<a href="#"><span className="fa fa-twitter-square"></span></a>
											<a href="#"><span className="fa fa-google-plus-square"></span></a>
											<a href="#"><span className="fa fa-instagram"></span></a>
											<a href="#"><span className="fa fa-youtube-square"></span></a>
											<a href="#"><span className="fa fa-skype"></span></a>
										</div>
										<nav className="b-footer__content-nav">
											<ul>
												<li><Link to="/">Accueil</Link></li>
												<li><Link to="/Aeroport">Aéroport de Roland-Garros</Link></li>
												<li><Link to="/Saint">Sainte-Marie</Link></li>
												<li><Link to="/Condition">Nos Conditions</Link></li>
												
												
												<li><Link to="/Contact">Contact</Link></li>
											</ul>
										</nav>
									</div>
								</div>
							</div>
						</div>
					</footer>
				</div>
			</>
		)
	}
}

export default Footer;
