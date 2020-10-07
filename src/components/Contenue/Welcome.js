import React from 'react';


class Welcome extends React.Component {
	render() {
		return (
			<>
				<section className="b-welcome">
					<div className="container">
						<div className="row">
							<div className="b-welcome__services">
								<div className="col-md-3 col-xs-12">
									<div className="row">
										<div className="col-xs-12 m-padding">
											<div className="b-welcome__services-auto wow zoomInLeft" data-wow-delay="0.3s">
												<div className="b-welcome__services-img m-auto">
													<span className="fa fa-cab"></span>
												</div>
												<h3>AUTO LOANS</h3>
											</div>
										</div>
										<div className="col-xs-12 text-right visible-md visible-lg">
											<div className="m-circle wow slideInRight" data-wow-delay="0.3s">
												<span className="b-welcome__services-circle"></span>
											</div>
										</div>
										<div className="col-xs-12 m-padding">
											<div className="b-welcome__services-buying wow zoomInLeft" data-wow-delay="0.3s">
												<div className="b-welcome__services-img m-buying">
													<span className="fa fa-book"></span>
												</div>
												<h3>Buying guide</h3>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xs-12 col-md-6">
								<div className="b-welcome__text wow zoomInUp" data-wow-delay="0.3s">
									<h2>LOCATION DE VOITURE A LA REUNION</h2>
									<h3>Besoin d'une voiture de location à la Réunion ?</h3>
									<p>Pour louer une voiture à la Réunion, rien de plus simple ! <b/>Réservez votre voiture en ligne et pas chère avec GP Location</p>
									<p>Vous effectuez votre réservation en ligne, <b/>Réservez 7j/7 24h/24 , <b/> votre voiture à la réunion au meilleur prix sur notre site Internet</p>
									<ul>
										<li><span className="fa fa-check"></span>Prise en charge à l'aéroport ou au port avec votre véhicule </li>
										<li><span className="fa fa-check"></span>Kilométrage illimité, assurances incluses </li>
										<li><span className="fa fa-check"></span>Assistance 7j/7, 24h/24 </li>
										<li><span className="fa fa-check"></span>Large choix de véhicules récents </li>
										<li><span className="fa fa-check"></span>Ouvert 7j/7 y compris jours fériés </li>
									</ul>
								</div>
							</div>
							<div className="b-welcome__services">
								<div className="col-md-3 col-xs-12">
									<div className="row">
										<div className="col-xs-12 m-padding">
											<div className="b-welcome__services-trade wow zoomInRight" data-wow-delay="0.3s">
												<div className="b-welcome__services-img m-trade">
													<span className="fa fa-male"></span>
												</div>
												<h3>Trade-Ins</h3>
											</div>
										</div>
										<div className="col-xs-12 text-left visible-md visible-lg">
											<div className="m-circle pull-right wow slideInLeft" data-wow-delay="0.3s">
												<span className="b-welcome__services-circle m-left"></span>
											</div>
										</div>
										<div className="col-xs-12 m-padding">
											<div className="b-welcome__services-support wow zoomInRight" data-wow-delay="0.3s">
												<div className="b-welcome__services-img m-support">
													
												</div>
												<h3>24/7 support</h3>
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

export default Welcome;
