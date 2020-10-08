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
									<h2>WORLD'S LEADING CAR DEALER</h2>
									<h3>WELCOME TO AUTOCLUB</h3>
									<p>Curabitur libero. Donec facilisis velit eudsl est. Phasellus consequat. Aenean vita quam. Vivamus et nunc. Nunc consequat sem velde metus imperdiet lacinia. Dui estter neque molestie necd dignissim ac hendrerit quis purus. Etiam sit amet vec convallis massa scelerisque mattis. Sed placerat leo nec.</p>
									<p>Ipsum midne ultrices magn eu tempor quam dolor eustrl sem. Donec quis dolel Donec pede quam placerat alterl tristique faucibus posuere lobortis.</p>
									<ul>
										<li><span className="fa fa-check"></span>Donec facilisis velit eu est phasellus consequat </li>
										<li><span className="fa fa-check"></span>Aenean vitae quam. Vivamus et nunc nunc consequat</li>
										<li><span className="fa fa-check"></span>Sem vel metus imperdiet lacinia enean </li>
										<li><span className="fa fa-check"></span>Dapibus aliquam augue fusce eleifend quisque tels</li>
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