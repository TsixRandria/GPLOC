import React, {Component} from 'react';


class SearchResult extends React.Component{
	render(){
		return (
			<div className="b-items">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-sm-4 col-xs-12">
							<aside className="b-items__aside">
								<h2 className="s-title wow zoomInUp" data-wow-delay="0.5s" style={{visibility: "visible", animationDelay: "0.5s", animationName: "zoomInUp"}}>REFINE YOUR SEARCH</h2>
								<div className="b-items__aside-main wow zoomInUp" data-wow-delay="0.5s" style={{visibility: "visible", animationDelay: "0.5s", animationName: "zoomInUp"}}>
									<form>
										<div className="b-items__aside-main-body">
											<div className="b-items__aside-main-body-item">
												<label>SELECT A MAKE</label>
												<div>
													<select name="select1" className="m-select">
														<option value="" selected="">Any Make</option>
													</select>
													<span className="fa fa-caret-down"></span>
												</div>
											</div>
											<div className="b-items__aside-main-body-item">
												<label>SELECT A MODEL</label>
												<div>
													<select name="select1" className="m-select">
														<option value="" selected="">Any Make</option>
													</select>
													<span className="fa fa-caret-down"></span>
												</div>
											</div>
											<div className="b-items__aside-main-body-item">
												<label>PRICE RANGE</label>
												<div className="slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" aria-disabled="false"><div className="ui-slider-range ui-widget-header ui-corner-all" style={{left: "0%", width: "100%"}}></div><a className="ui-slider-handle ui-state-default ui-corner-all" href="#" style={{left: "0%"}}><span className="min">100</span></a><a className="ui-slider-handle ui-state-default ui-corner-all" href="#" style={{left: "100%"}}><span className="max">1000</span></a></div>
												<input type="hidden" name="min" value="100" className="j-min"/>
												<input type="hidden" name="max" value="1000" className="j-max"/>
											</div>
											<div className="b-items__aside-main-body-item">
												<label>VEHICLE TYPE</label>
												<div>
													<select name="select1" className="m-select">
														<option value="" selected="">Any Type</option>
													</select>
													<span className="fa fa-caret-down"></span>
												</div>
											</div>
											<div className="b-items__aside-main-body-item">
												<label>VEHICLE STATUS</label>
												<div>
													<select name="select1" className="m-select">
														<option value="" selected="">Any Status</option>
													</select>
													<span className="fa fa-caret-down"></span>
												</div>
											</div>
											<div className="b-items__aside-main-body-item">
												<label>FUEL TYPE</label>
												<div>
													<select name="select1" className="m-select">
														<option value="" selected="">All Fuel Types</option>
													</select>
													<span className="fa fa-caret-down"></span>
												</div>
											</div>
										</div>
										<footer className="b-items__aside-main-footer">
											<button type="submit" className="btn m-btn">FILTER VEHICLES<span className="fa fa-angle-right"></span></button><br/>
											<a href="">RESET ALL FILTERS</a>
										</footer>
									</form>
								</div>
								<div className="b-items__aside-sell wow zoomInUp" data-wow-delay="0.5s" style={{visibility: "visible", animationDelay: "0.5s", animationName: "zoomInUp"}}>
									<div className="b-items__aside-sell-img">
										<h3>SELL YOUR CAR</h3>
									</div>
									<div className="b-items__aside-sell-info">
										<p>
											Nam tellus enimds eleifend dignis lsim
											biben edum tristique sed metus fusce
											Maecenas lobortis.
										</p>
										<a href="submit1.html" className="btn m-btn">REGISTER NOW<span className="fa fa-angle-right"></span></a>
									</div>
								</div>
							</aside>
						</div>
						

						<div className="col-lg-9 col-sm-8 col-xs-12">
		                    <div className="b-items__cars">
		                        <div className="b-items__cars-one wow zoomInUp" data-wow-delay="0.5s" style={{visibility: "visible", animationDelay: "0.5s", animationName: "zoomInUp"}}>
		                            <div className="b-items__cars-one-img">
		                                <img src="media/237x202/toyota.jpg" alt="toyota"/>
		                                <span className="b-items__cars-one-img-type m-premium">PREMIUM</span>
		                            </div>
		                            <div className="b-items__cars-one-info">
		                                <form className="b-items__cars-one-info-header s-lineDownLeft">
		                                    <h2>Toyota RAV4 Limited V6</h2>
		                                    <input type="checkbox" name="check1" id="check1"/>
		                                    <label for="check1" className="b-items__cars-one-img-check"><span className="fa fa-check"></span></label>
		                                </form>
		                                <div className="row s-noRightMargin">
		                                    <div className="col-md-9 col-xs-12">
		                                        <p>In a pickup market gone fancy, the Silverado sticks to its basic-truck recipe. The steering is accurate, and the Silverado</p>
		                                        <div className="m-width row m-smallPadding">
		                                            <div className="col-xs-6">
		                                                <div className="row m-smallPadding">
		                                                    <div className="col-xs-6">
		                                                        <span className="b-items__cars-one-info-title">Body Style:</span>
		                                                        <span className="b-items__cars-one-info-title">Mileage:</span>
		                                                        <span className="b-items__cars-one-info-title">Transmission:</span>
		                                                    </div>
		                                                    <div className="col-xs-6">
		                                                        <span className="b-items__cars-one-info-value">Sedan</span>
		                                                        <span className="b-items__cars-one-info-value">35,000 KM</span>
		                                                        <span className="b-items__cars-one-info-value">6-Speed Auto</span>
		                                                    </div>
		                                                </div>
		                                            </div>
		                                            <div className="col-xs-6">
		                                                <div className="row m-smallPadding">
		                                                    <div className="col-xs-4">
		                                                        <span className="b-items__cars-one-info-title">Engine:</span>
		                                                        <span className="b-items__cars-one-info-title">Color:</span>
		                                                        <span className="b-items__cars-one-info-title">Specs:</span>
		                                                    </div>
		                                                    <div className="col-xs-8">
		                                                        <span className="b-items__cars-one-info-value">DOHC 24-valve V-6</span>
		                                                        <span className="b-items__cars-one-info-value">White</span>
		                                                        <span className="b-items__cars-one-info-value">2-Passenger, 2-Door</span>
		                                                    </div>
		                                                </div>
		                                            </div>
		                                        </div>
		                                    </div>
		                                    <div className="col-md-3 col-xs-12">
		                                        <div className="b-items__cars-one-info-price">
		                                            <div className="pull-right">
		                                                <h3>Price:</h3>
		                                                <h4>$29,415</h4>
		                                            </div>
		                                            <a href="detail.html" className="btn m-btn">VIEW DETAILS<span className="fa fa-angle-right"></span></a>
		                                        </div>
		                                    </div>
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                    <div className="b-items__pagination wow zoomInUp" data-wow-delay="0.5s" style={{visibility: "hidden", animationDelay: "0.5s", animationName: "none"}}>
		                        <div className="b-items__pagination-main">
		                            <a href="#" className="m-left"><span className="fa fa-angle-left"></span></a>
		                            <span className="m-active"><a href="#">1</a></span>
		                            <span><a href="#">2</a></span>
		                            <span><a href="#">3</a></span>
		                            <span><a href="#">4</a></span>
		                            <a href="#" className="m-right"><span className="fa fa-angle-right"></span></a>    
		                        </div>
		                    </div>
		                </div>
					</div>
				</div>
			</div>

		)
	}
}

export default SearchResult;