import React from 'react';


class World extends React.Component {
	render() {
		return (
			<>
				<section className="b-world">
					<div className="container">
						<div className="row">
							<div className="col-sm-4 col-xs-12">
								<div className="b-world__item wow zoomInLeft" data-wow-delay="0.3s">
									<img className="img-responsive" src="media/370x200/car2.jpg" alt="wolks" />
									<div className="b-world__item-val">
										<span className="b-world__item-val-title">RENAULT</span>
									</div>
									<h2>Dacia Duster Diesel Automatique</h2>
									<p>Curabitur libero. Donec facilisis velit eu est. Phasellus cons quat. Aenean vitae quam. Vivamus et nunc. Nunc consequ
										sem velde metus imperdiet lacinia.</p>
								</div>
							</div>
							<div className="col-sm-4 col-xs-12">
								<div className="b-world__item wow zoomInUp" data-wow-delay="0.3s">
									<img className="img-responsive"  src="media/370x200/car1.jpg" alt="mazda" />
									<div className="b-world__item-val">
										<span className="b-world__item-val-title">CITROËN </span>
									</div>
									<h2>C1 ou Toyota Aygo</h2>
									<p>Curabitur libero. Donec facilisis velit eu est. Phasellus cons quat. Aenean vitae quam. Vivamus et nunc. Nunc consequ
										sem velde metus imp         erdiet lacinia.</p>
								</div>
							</div>
							<div className="col-sm-4 col-xs-12">
								<div className="b-world__item wow zoomInRight" data-wow-delay="0.3s">
									<img className="img-responsive"  src="media/370x200/car3.jpg" alt="chevrolet" />
									<div className="b-world__item-val">
										<span className="b-world__item-val-title">CHEVROLET</span>
									</div>
									<h2>Dacia Logan Diesel</h2>
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


export default World;