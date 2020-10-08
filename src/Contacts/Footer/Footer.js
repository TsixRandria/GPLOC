import React from 'react';



class Footer extends React.Component {
	render() {
		return (
			<>
				<div>
					<div className="b-info">
						<div className="container">
							<div className="row">
								<div className="col-md-4 col-xs-12">
									<aside className="b-info__aside wow zoomInLeft" data-wow-delay="0.3s">
										<article className="b-info__aside-article">
											<h3>OPENING HOURS</h3>
											<div className="b-info__aside-article-item">
												<h6>Sales Department</h6>
												<p>Mon-Sat : 8:00am - 5:00pm<span>&middot;</span> 
													Sunday is closed</p>
											</div>
											<div className="b-info__aside-article-item">
												<h6>Service Department</h6>
												<p>Mon-Sat : 8:00am - 5:00pm<span>&middot;</span> 
													Sunday is closed</p>
											</div>
										</article>
										<article className="b-info__aside-article">
											<h3>Réservez 7j/7 24h/24</h3>
											<p>Avec le kilométrage illimité inclus dans notre offre de location, vous pourrez sillonner l'île d'un bout à l'autre sereinement.
											</p>
										</article>
									</aside>
								</div>
								<div className="col-md-4 col-xs-12">
									<div className="b-info__latest">
										<h3 className="wow slideInUp" data-wow-delay="0.3s">LATEST AUTOS</h3>
										<div className="b-info__latest-article wow slideInUp" data-wow-delay="0.3s">
											<div className="b-info__latest-article-photo m-audi"></div>
											<div className="b-info__latest-article-info">
												<h6><a href="detail.html">MERCEDES-AMG GT S</a></h6>
												<div className="b-featured__item-links m-auto">
													<a href="#">Used</a>
													<a href="#">2014</a>
													<a href="#">Manual</a>
													<a href="#">Orange</a>
													<a href="#">Petrol</a>
												</div>
												<p><span className="fa fa-tachometer"></span> 35,000 KM</p>
											</div>
										</div>
										<div className="b-info__latest-article wow slideInUp" data-wow-delay="0.3s">
											<div className="b-info__latest-article-photo m-audiSpyder"></div>
											<div className="b-info__latest-article-info">
												<h6><a href="detail.html">AUDI R8 SPYDER V-8</a></h6>
												<div className="b-featured__item-links m-auto">
													<a href="#">Used</a>
													<a href="#">2014</a>
													<a href="#">Manual</a>
													<a href="#">Orange</a>
													<a href="#">Petrol</a>
												</div>
												<p><span className="fa fa-tachometer"></span> 35,000 KM</p>
											</div>
										</div>
										<div className="b-info__latest-article wow slideInUp" data-wow-delay="0.3s">
											<div className="b-info__latest-article-photo m-aston"></div>
											<div className="b-info__latest-article-info">
												<h6><a href="detail.html">ASTON MARTIN VANTAGE</a></h6>
												<div className="b-featured__item-links m-auto">
													<a href="#">Used</a>
													<a href="#">2014</a>
													<a href="#">Manual</a>
													<a href="#">Orange</a>
													<a href="#">Petrol</a>
												</div>
												<p><span className="fa fa-tachometer"></span> 35,000 KM</p>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-4 col-xs-12">
									<address className="b-info__contacts wow slideInUp" data-wow-delay="0.3s">
										<p>contact us</p>
										<div className="b-info__contacts-item">
											<span className="fa fa-map-marker"></span>
											<em>34
											rue de la Plantation</em>
										</div>
										<div className="b-info__contacts-item">
											<span className="fa fa-phone"></span>
											<em>Phone:  06 92 370 380</em>
										</div>
										<div className="b-info__contacts-item">
											<span className="fa fa-fax"></span>
											<em>FAX:  000-00-000-00</em>
										</div>
										<div className="b-info__contacts-item">
											<span className="fa fa-envelope"></span>
											<em>Email:  gplocation@gmail.com</em>
										</div>
									</address>
									<address className="b-info__map">
										<a href="contacts.html">Open Location Map</a>
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
												<li><a href="home.html">Acceuil</a></li>
												<li><a href="404.html">Aéroport de Roland-Garros</a></li>
												<li><a href="listings.html">Sainte-Marie</a></li>
												<li><a href="about.html">Nos Conditions</a></li>
												
												
												<li><a href="contacts.html">Contact</a></li>
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