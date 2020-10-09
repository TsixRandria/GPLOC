import React, { Component } from 'react'

class OffreAeroport extends Component {
    render() {
        return (
        	<>
				<section className="b-what s-shadow m-home">
					<div className="container">
						<h3 className="s-titleBg wow zoomInUp" data-wow-delay="0.5s" style={{visibility: "visible", animationDelay: "0.5s", animationName: "zoomInUp"}}>CUSTOMERS ARE IMPORTANT FOR US</h3><br/>
						<h2 className="s-title wow zoomInUp" data-wow-delay="0.5s" style={{visibility: "visible", animationDelay: "0.5s", animationName: "zoomInUp"}}>WHAT WE OFFERS</h2>
						<div className="row">
							<div className="col-sm-4 col-xs-12">
								<div className="b-world__item wow zoomInLeft" data-wow-delay="0.5s" style={{visibility: "visible", animationDelay: "0.5s", animationName: "ZoomInLeft"}}>
									<img className="img-responsive" src="media/370x200/wolks.jpg" alt="wolks"/>
									<div className="b-world__item-val">
										<span className="b-world__item-val-title">WE OFFER</span>
									</div>
									<h2>Low Prices, No Haggling</h2>
									<p>Curabitur libero. Donec facilisis velit eu est. Phasellus cons quat. Aenean vitae quam. Vivamus et nunc. Nunc consequ
									sem velde metus imperdiet lacinia.</p>
								</div>
							</div>
							<div className="col-sm-4 col-xs-12">
								<div className="b-world__item wow zoomInUp" data-wow-delay="0.5s" style={{visibility: "visible", animationDelay: "0.5s", animationName: "zoomInUp"}}>
									<img className="img-responsive" src="media/370x200/mazda.jpg" alt="mazda"/>
									<div className="b-world__item-val">
										<span className="b-world__item-val-title">WE ARE THE</span>
									</div>
									<h2>Largest Car Dealership</h2>
									<p>Curabitur libero. Donec facilisis velit eu est. Phasellus cons quat. Aenean vitae quam. Vivamus et nunc. Nunc consequ
									sem velde metus imp         erdiet lacinia.</p>
								</div>
							</div>
							<div className="col-sm-4 col-xs-12">
								<div className="b-world__item wow zoomInRight" data-wow-delay="0.5s" style={{visibility: "visible", animationDelay: "0.5s", animationName: "zoomInUp"}}>
									<img className="img-responsive" src="media/370x200/chevrolet.jpg" alt="chevrolet"/>
									<div className="b-world__item-val">
										<span className="b-world__item-val-title">OUR CUSTOMERS GET</span>
									</div>
									<h2>Multipoint Safety Check</h2>
									<p>Curabitur libero. Donec facilisis velit eu est. Phasellus cons quat. Aenean vitae quam. Vivamus et nunc. Nunc consequ
									sem velde metus imp         erdiet lacinia.</p>
								</div>
							</div>
						</div>
					</div>
				</section>
        	</>
		)

    }
}
export default OffreAeroport;