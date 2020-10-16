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
		</>
        )
    }
}
export default HeaderAeroport;