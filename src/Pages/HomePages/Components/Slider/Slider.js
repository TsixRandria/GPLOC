import React from 'react';


class Slider extends React.Component {
	render() {
		return (
			<>
				<section className="b-slider"> 
					<div id="carousel" className="slide carousel carousel-fade">
						<div className="carousel-inner">
							<div className="item active">
								<img src="media/main-slider/4.jpg" alt="sliderImg" />
								<div className="container">
									<div className="carousel-caption b-slider__info">
										<h3>Find your dream car</h3>
										<h2>MercedesBenz <br/>CLS63 AMG</h2>
										<p>Model 2015 <span>$214,900</span></p>
										<a className="btn m-btn" href="detail.html">see details<span className="fa fa-angle-right"></span></a>
									</div>
								</div>
							</div>
							<div className="item">
								<img src="media/main-slider/2.jpg" alt="sliderImg" />
								<div className="container">
									<div className="carousel-caption b-slider__info">
										<h3>Find your dream car</h3>
										<h2>MercedesBenz <br/>CLS63 AMG</h2>
										<p>Model 2015 <span>$214,900</span></p>
										<a className="btn m-btn" href="detail.html">see details<span className="fa fa-angle-right"></span></a>
									</div>
								</div>
							</div>
						</div>
						<a className="carousel-control right" href="#carousel" data-slide="next">
							<span className="fa fa-angle-right m-control-right"></span>
						</a>
						<a className="carousel-control left" href="#carousel" data-slide="prev">
							<span className="fa fa-angle-left m-control-left"></span>
						</a>
					</div>
				</section>

			</>
		)
	}
}


export default Slider;