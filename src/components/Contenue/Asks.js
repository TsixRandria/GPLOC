import React from 'react';



class Asks extends React.Component {
	render() {
		return (
			<>
				<section className="b-asks">
					<div className="container">
						<div className="row">
							<div className="col-md-6 col-sm-10 col-sm-offset-1 col-md-offset-0 col-xs-12">
								<div className="b-asks__first wow zoomInLeft" data-wow-delay="0.3s">
									<div className="b-asks__first-circle">
										<span className="fa fa-search"></span>
									</div>
									<div className="b-asks__first-info">
										<h2>VOULEZ VOUS DECOUVRIRE LA REUNION?</h2>
										<p>Que vous veniez seul ou en famille, vous trouverez une voiture adaptée à vos besoins. Notre agence étant située à cinq minutes de l'aéroport de Saint-Denis, nous pouvons vous prendre en charge dès votre sortie de l'avion. Avec notre accueil personnalisé, vous n'aurez pas à attendre et pourrez partir directement rejoindre votre lieu de résidence ou explorer les alentours.</p>
									</div>
									<div className="b-asks__first-arrow">
										<a href="listings.html"><span className="fa fa-angle-right"></span></a>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-sm-10 col-sm-offset-1 col-xs-12 col-md-offset-0">
								<div className="b-asks__first m-second wow zoomInRight" data-wow-delay="0.3s">
									<div className="b-asks__first-circle">
										<span className="fa fa-usd"></span>
									</div>
									<div className="b-asks__first-info">
										<h2>BESOIN D'UNE VOITURE?</h2>
										<p>Nous pouvons vous fournir un siège bébé, un réhausseur ou encore un GPS si besoin. Notre agence étant ouverte sept jours sur sept, y compris les jours fériés, tout est mis en œuvre pour que vous passiez un séjour inoubliable sur l'île de la Réunion.</p>
										<hr />
										<p> D’un rapport qualité/prix très attractif, notre offre de location de voiture aura de quoi vous séduire !</p>
									</div>
									<div className="b-asks__first-arrow">
										<a href="listings.html"><span className="fa fa-angle-right"></span></a>
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

export default Asks;