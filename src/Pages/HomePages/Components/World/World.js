import React from 'react';
import './Style.css';


class World extends React.Component {
	render() {
		return (
			<>

				<section className="b-world">
					<div className="container">
						<div className="row">
							<div className="col-sm-4 col-xs-12">
								<div className="b-world__item wow zoomInUp" data-wow-delay="0.3s">
									<img className="img-responsive"  src="media/370x200/C1.jpg" alt="mazda" />
									<div className="b-world__item-val">
										<span className="b-world__item-val-title">CITROËN </span>
									</div>
									<h2>C1 ou Toyota Aygo</h2>
									<p>
										<ul>
											<li>4 places</li>
											<li>Boîte manuelle</li>
											<li>Essence</li>
											<li>Climatisation : oui</li>
										</ul>
									</p>
								</div>

							</div>
							<div className="col-sm-4 col-xs-12">
								<div className="b-world__item wow zoomInLeft" data-wow-delay="0.3s">
									<img className="img-responsive" src="media/370x200/car2.jpg" alt="wolks" />
									<div className="b-world__item-val">
										<span className="b-world__item-val-title">RENAULT</span>
									</div>
									<h2>Dacia Duster Diesel Automatique</h2>
									<p>
										<ul>
											<li>5 places</li>
											<li>Boîte automatique</li>
											<li>Diesel</li>
											<li>Climatisation : oui</li>
										</ul>
									</p>
								</div>
							</div>
							<div className="col-sm-4 col-xs-12">
								<div className="b-world__item wow zoomInRight" data-wow-delay="0.3s">
									<img className="img-responsive"  src="media/370x200/car3.jpg" alt="chevrolet" />
									<div className="b-world__item-val">
										<span className="b-world__item-val-title">CHEVROLET</span>
									</div>
									<h2>Dacia Logan Diesel</h2>
									<p>
										<ul>
											<li>5 places</li>
											<li>Boîte manuelle</li>
											<li>Diesel</li>
											<li>Climatisation : oui</li>
										</ul>
									</p>
								</div>
							</div>
							<div className="col-sm-12 col-xs-12">
							<div className="row">
								<a href="article.html" className="btn m-btn m-readMore wow zoomInUp lien" data-wow-delay="0.5s" style={{visibility: "visible", animationDelay: "0.5s", animationName: "zoomInUp"}}>view listings<span class="fa fa-angle-right"></span></a>
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