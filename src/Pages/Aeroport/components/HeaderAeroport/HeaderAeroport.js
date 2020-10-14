import React, { Component } from 'react'

 class HeaderAeroport extends Component {
    render() {
        return (
        <>	
        	<section className="b-pageHeader">
				<div className="container">
					<h1 className="wow zoomInLeft" data-wow-delay="0.7s" style={{visibility: "visible", animationDelay: "0.7s", animationName: "zoomInLeft"}}>Aéroport de la Réunion Roland-Garros</h1>
					<div className="b-pageHeader__search wow zoomInRight" data-wow-delay="0.7s" style={{visibility: "visible", animationDelay: "0.7s", animationName: "zoomInRight"}}>
						<h3>Location de voiture Aéroport de la Réunion</h3>
					</div>
				</div>
			</section>

			<div className="b-breadCumbs s-shadow">
			<div className="container">
				<a href="home.html" className="b-breadCumbs__page">Accueil</a><span className="fa fa-angle-right"></span><a href="about.html" className="b-breadCumbs__page m-active">Aéroport de la Réunion Roland-Garros</a>
			</div>
			</div>

			<section className="b-more">
				<div className="container">
					<div className="row">
						<div className="col-sm-12 col-xs-12">
							<div className="b-more__why wow zoomInLeft" data-wow-delay="0.5s" style={{visibility: "visible", animationDelay: "0.5s", animationName: "ZoomInLeft"}}>
								<center><h2 className="s-title">Besoin d'une voiture de location à l'aéroport de la Réunion Roland-Garros ?</h2></center>
								<p className="paddingp mbottom10">Pour louer une voiture à l'aéroport de la Réunion Roland-Garros, rien de plus simple ! <b>Réservez votre voiture en ligne et pas cher avec GP Location.</b></p>
								<div className="row">
									<div className="col-sm-6 col-xs-12">
										<div className="b-article__main-related-item wow zoomInUp" data-wow-delay="0.5s">
											<div className="row m-smallPadding">
												<div className="col-xs-4">
													<img className="center-block img-responsive" src="media/about/reservation.jpg" alt="related" />       
												</div>
												<div className="col-xs-8">
													<h5><a>Vous effectuez votre réservation en ligne</a></h5>  
													<div className="b-blog__posts-one-body-head-notes">
														<span className="b-blog__posts-one-body-head-notes-note"><span ></span>Réservez 7j/7 24h/24</span><br />
														<span className="b-blog__posts-one-body-head-notes-note"><span ></span>votre voiture de location au meilleur prix sur notre site Internet</span>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-sm-6 col-xs-12">
										<div className="b-article__main-related-item wow zoomInUp" data-wow-delay="0.5s">
											<div className="row m-smallPadding">
												<div className="col-xs-4">
													<img className="center-block img-responsive" src="media/about/reservation.jpg" alt="related" />       
												</div>
												<div className="col-xs-8">
													<h5><a>Confirmation de votre location</a></h5>  
													<div className="b-blog__posts-one-body-head-notes">
														<span className="b-blog__posts-one-body-head-notes-note"><span ></span>Votre confirmation de réservation<br/> est envoyée par email prête à être imprimée.</span>
														
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>  

							</div>
						</div>
						
					</div>
				</div>
			</section>

		</>
        )
    }
}
export default HeaderAeroport;