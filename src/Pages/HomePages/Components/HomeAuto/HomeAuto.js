import React, { Component } from 'react';
import { Link } from 'react-router-dom';

 class HomeAuto extends Component {
    render() {
        return (
            <div>

                <section class="b-article">
			<div class="container">
				<div class="row">
					<div class="col-md-9 col-xs-12">
						<div class="b-article__main">
							<div class="b-blog__posts-one">
								<div class="row m-noBlockPadding">
									<div class="col-sm-11 col-xs-10">
										<div class="b-blog__posts-one-body">
											<header class="b-blog__posts-one-body-head wow zoomInUp" data-wow-delay="0.5s">
												<h2 class="s-titleDet">Découvrir l'île de la Réunion à bord d'une voiture de location</h2>
											</header>
											<div class="b-blog__posts-one-body-main wow zoomInUp" data-wow-delay="0.5s">
												<div class="b-blog__posts-one-body-main-img">
													<ul class="bxslider enable-bx-slider" data-pager-custom="#bx-pager" data-mode="fade" data-pager-slide="false" data-mode-pager="horizontal" data-pager-qty="0">
															<img class="img-responsive" src="media/750x300/blogBig1.jpg" alt="jaguar" />

													</ul>
													
												</div>
												<p>Pour découvrir l'île de la Réunion, une voiture est indispensable. En effet, le réseau de transport public étant limité, avec une voiture de location vous serez libre dans vos déplacements.</p>
												<blockquote>
													
												Avec le kilométrage illimité inclus dans notre offre de location, vous pourrez sillonner l'île d'un bout à l'autre sereinement. GP location met à votre disposition un large choix de véhicules récents, voire neufs, au sein de sa flotte automobile.
												</blockquote>
												<p>Que vous veniez seul ou en famille, vous trouverez une voiture adaptée à vos besoins. Notre agence étant située à cinq minutes de l'aéroport de Saint-Denis, nous pouvons vous prendre en charge dès votre sortie de l'avion. Avec notre accueil personnalisé, vous n'aurez pas à attendre et pourrez partir directement rejoindre votre lieu de résidence ou explorer les alentours.</p>
												<p>Nous pouvons vous fournir un siège bébé, un réhausseur ou encore un GPS si besoin. Notre agence étant ouverte sept jours sur sept, y compris les jours fériés, tout est mis en œuvre pour que vous passiez un séjour inoubliable sur l'île de la Réunion.

D’un rapport qualité/prix très attractif, notre offre de location de voiture aura de quoi vous séduire !</p>
											</div>
											<div class="b-blog__posts-one-body-why wow zoomInUp" data-wow-delay="0.5s">
												<div class="s-lineDownLeft  s-titleLeft">
													<div>
														<h2 class="s-titleDet">Les avantages GP Location</h2>
													</div>
												</div>
												<div class="clearfix"></div>
												
												<ul class="s-list">
													<li><span class="fa fa-check"></span>Prise en charge à l'aéroport ou au port avec votre véhicule</li>
													<li><span class="fa fa-check"></span>Kilométrage illimité, assurances incluses</li>
													<li><span class="fa fa-check"></span>Assistance 7j/7, 24h/24 </li>
													<li><span class="fa fa-check"></span>Large choix de véhicules récents </li>
													<li><span class="fa fa-check"></span>Ouvert 7j/7 y compris jours fériés</li>

												</ul>
												<div class="row">
												<div class="s-lineDownLeft  s-titleLeft">
													<div>
														<h2 class="s-titleDet">Des visites incontournables sur l'île de la Réunion</h2>
													</div>
												</div>
												<div class="clearfix"></div>
													<div class="col-sm-6 col-xs-12">
														<img src="media/articles/article.jpg" class="img-responsive"  alt="nissan"/>
													</div>
													<div class="col-sm-6 col-xs-12">
														<p class="m-smallMargin">Cette île volcanique, située en plein cœur de l'océan Indien, vous offrira des expériences inoubliables. Comme la plongée sous-marine, au milieu des différentes espèces aquatiques telles que les dauphins, les baleines, les tortues marines ou encore les requins. Avec votre voiture de location, vous pourrez rejoindre le point de départ de nombreuses randonnées qui cheminent jusqu'en haut des différents pitons, dont le fameux Piton de la Fournaise, toujours en activité volcanique. Grâce à notre assistance, disponible sept jours sur sept et 24 h/24, vous n’aurez pas à vous soucier d’un quelconque ennui mécanique.</p>
														
													</div>
												</div>
												<p>En voiture, vous pourrez rallier le sud de l’île pour rejoindre la ville de Saint-Pierre et profiter de son front de mer très animé. Ne manquez pas non plus la visite du Cirque de Mafate ou encore celui de Cilaos, qui vous offriront une vue grandiose et panoramique de l’île. L’île de la Réunion ayant une superficie de 2 500 km² environ, de nombreux endroits paradisiaques sont à découvrir. Les plages de sable fin aux eaux turquoise n’attendent que vous. C'est pourquoi notre gamme de véhicules de location est aussi variée, pour vous offrir un séjour unique et sécurisant.</p>

              
											</div>
											
										</div>
									</div>

								</div>
							</div>
							{/* <div class="b-article__main-related s-shadow">
								<div class="s-lineDownLeft  s-titleLeft">
									<div>
										<h2 class="s-titleDet wow zoomInUp" data-wow-delay="0.5s">More Related Articles</h2>
									</div>
								</div>
								<div class="clearfix"></div>
								<div class="row">
									<div class="col-sm-6 col-xs-12">
										<div class="b-article__main-related-item wow zoomInUp" data-wow-delay="0.5s">
											<div class="row m-smallPadding">
												<div class="col-xs-4">
													<img class="center-block img-responsive" src="media/100x80/related1.jpg" alt="related" />       
												</div>
												<div class="col-xs-8">
													<h5><a href="article.html">2015 Jaguar F-Type Coupe in the Spanish Pyrenees</a></h5>  
													<div class="b-blog__posts-one-body-head-notes">
														<span class="b-blog__posts-one-body-head-notes-note"><span class="fa fa-user"></span>Our Admin</span>
														<span class="b-blog__posts-one-body-head-notes-note"><span class="fa fa-calendar-o"></span>20th May 2015</span>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="col-sm-6 col-xs-12">
										<div class="b-article__main-related-item wow zoomInUp" data-wow-delay="0.5s">
											<div class="row m-smallPadding">
												<div class="col-xs-4">
													<img class="center-block img-responsive" src="media/100x80/related2.jpg" alt="related" />       
												</div>
												<div class="col-xs-8">
													<h5><a href="article.html">Used 2008 to 2014 Mercedes-Benz C-Class Review</a></h5>  
													<div class="b-blog__posts-one-body-head-notes">
														<span class="b-blog__posts-one-body-head-notes-note"><span class="fa fa-user"></span>Our Admin</span>
														<span class="b-blog__posts-one-body-head-notes-note"><span class="fa fa-calendar-o"></span>20th May 2015</span>
													</div>
												</div>

								
											</div>
										</div>
									</div>
								</div>  
							</div> */}
							<div class="b-article__main-author wow zoomInUp" data-wow-delay="0.5s">
								<div class="row">
								
									<div class="col-xs-12 pull-center">
									<h4>Avis de nos clients</h4>
									<p property="aggregateRating" typeof="AggregateRating"><b><span property="ratingValue">4.8</span>/5</b> sur <span property="ratingCount">107</span> avis de <a href="../www.rentiles.fr/location-vehicules-reunion.html" target="_blank">Rentîles</a></p>
										<div class="clearfix"></div>
										<p>Joel.P pour une location à Aéroport de la Réunion Roland Garros du Vendredi 13 Mars 2020 au Vendredi 20 Mars 2020 :
												“Très bon accueil, prix raisonnable et avoir fait très rapidement suite à notre départ précipité pour cause de pandémie !
												Je recommande et n’hésiterai pas à l’occasion de réserver à nouveau !”</p>
									</div>
								</div>
							</div>
							
						</div>
					</div>

					<div class="col-md-3 col-xs-12">
						<aside class="b-blog__aside">
 
							<div class="b-blog__aside-categories wow zoomInUp" data-wow-delay="0.5s">
								<header class="s-lineDownLeft">
									<h2 class="s-titleDet">Réservez en ligne</h2>
								</header>
								<nav>
									<ul class="b-blog__aside-categories-list">
										<li class="m-active"><a>Accueil</a></li>
										<li><Link to="/Aeroport">Aéroport de la Réunion Roland-Garros</Link></li>
										<li><Link to="/Sainte-Marie">Port de Sainte-Marie</Link></li>
									</ul>
								</nav>
							</div>
							<div class="b-blog__aside-popular wow zoomInUp" data-wow-delay="0.5s">
								<header class="s-lineDownLeft">
									<h2 class="s-titleDet">Aéroport de la Réunion</h2>
								</header>
								<div class="b-blog__aside-popular-posts">
									<div class="b-blog__aside-popular-posts-one">
										<img class="img-responsive" src="media/270x150/acura.jpg" alt="merc" />
										
									</div>
									<header class="s-lineDownLeft">
									<h2 class="s-titleDet">Port de Sainte-Marie</h2>
									</header>
									<div class="b-blog__aside-popular-posts-one">
										<img class="img-responsive" src="media/270x150/amg.jpg" alt="outlander" />
										
									</div>
								</div>
							</div>
							<div class="b-blog__aside-text wow zoomInUp" data-wow-delay="0.5s">
								<header class="s-lineDownLeft">
									<h2 class="s-titleDet">Île de la Réunion?</h2>
								</header>
								<p>cet une île qui se stue aux plain côeur de l'Ocean Indien. </p>
							</div>
							<div class="b-blog__aside-reviews wow zoomInUp" data-wow-delay="0.5s">
								<header class="s-lineDownLeft">
									<h2 class="s-titleDet">LATEST REVIEWS</h2>
								</header>
								<div class="b-blog__aside-reviews-posts">
									<div class="b-blog__aside-reviews-posts-one">
										<div class="row m-smallPadding">
											<div class="col-xs-5">
												<img src="media/100x80/audiRev.jpg" alt="audi" class="img-responsive pull-right" />
											</div>
											<div class="col-xs-7">
												<div class="b-blog__aside-reviews-posts-one-info">
													<p>First Drive:<br/>2016 Audi Q3</p>
													<div class="b-world__item-val">
														<div class="b-world__item-val-circles">
															<span></span>
															<span></span>
															<span></span>
															<span></span>
															<span class="m-empty"></span>
														</div>
														<span class="b-world__item-num">4.1</span>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="b-blog__aside-reviews-posts-one">
										<div class="row m-smallPadding">
											<div class="col-xs-5">
												<img src="media/100x80/mercRev.jpg" alt="merc" class="img-responsive  pull-right" />
											</div>
											<div class="col-xs-7">
												<div class="b-blog__aside-reviews-posts-one-info">
													<p>Mercedes-Benz GLA Class 2015 Hottest Hatch</p>
													<div class="b-world__item-val">
														<div class="b-world__item-val-circles">
															<span></span>
															<span></span>
															<span></span>
															<span></span>
															<span class="m-empty"></span>
														</div>
														<span class="b-world__item-num">4.1</span>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="b-blog__aside-reviews-posts-one">
										<div class="row m-smallPadding">
											<div class="col-xs-5">
												<img src="media/100x80/mazdaRev.jpg" alt="" class="img-responsive  pull-right" />
											</div>
											<div class="col-xs-7">
												<div class="b-blog__aside-reviews-posts-one-info">
													<p>First Look: <br />2016 Mazda CX-3</p>
													<div class="b-world__item-val">
														<div class="b-world__item-val-circles">
															<span></span>
															<span></span>
															<span></span>
															<span></span>
															<span class="m-empty"></span>
														</div>
														<span class="b-world__item-num">4.1</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							
							
						</aside>

					</div>
				</div>
			</div>
		</section>

            </div>
        )
    }
}
export default HomeAuto;