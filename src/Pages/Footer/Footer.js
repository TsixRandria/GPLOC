import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

class Footer extends React.Component {
	render() {
		return (
			<>
				<div>
					
					<footer className="b-footer">
						<a id="to-top" href="#this-is-top"><i className="fa fa-chevron-up"></i></a>
						<div className="container">
							<div className="row">
								<div className="col-xs-4">
									<div className="b-footer__company wow slideInLeft" data-wow-delay="0.3s">
										<div className="b-nav__logo">
											<h3><a href="home.html">GP<span>Location</span></a></h3>
										</div>
										<p>Location de voiture à la Reunion </p>
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
