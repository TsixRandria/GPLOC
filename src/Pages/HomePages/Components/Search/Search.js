import React from 'react';


class Search extends React.Component {
	render() {
		return (
			<>
				<section className="b-search">
					<div className="container">
						<h1 className="wow zoomInUp" data-wow-delay="0.3s">UNSURE WHICH VEHICLE YOU ARE LOOKING FOR? FIND IT HERE</h1>
						<div className="b-search__main wow zoomInUp" data-wow-delay="0.3s">
							<h4>SELECT VEHICLE BODY TYPE</h4>
							<form action="listingsTwo.html" method="POST" className="b-search__main-form">
								<div className="row">
									<div className="col-xs-12 col-md-8">
										<div className="m-firstSelects">
											<div className="col-xs-4">
												<select name="select1">
													<option value="0" selected="selected">Any Make</option>
													<option value="1" >Any Make</option>
													<option value="2" >Any Make</option>
													<option value="3" >Any Make</option>
													<option value="4" >Any Make</option>
												</select>
												<span className="fa fa-caret-down"></span>
												<p>MISSING MANUFACTURER?</p>
											</div>
											<div className="col-xs-4">
												<select name="select2">
													<option value="0" selected="selected">Any Model</option>
													<option value="1" >Any Model</option>
													<option value="2" >Any Model</option>
													<option value="3" >Any Model</option>
												</select>
												<span className="fa fa-caret-down"></span>
												<p>MISSING MODEL?</p>
											</div>
											<div className="col-xs-4">
												<select name="select3">
													<option value="1" selected="selected">Vehicle Status</option>
													<option value="2">Vehicle Status 2</option>
													<option value="3">Vehicle Status 3</option>
													<option value="4">Vehicle Status 4</option>
													<option value="5">Vehicle Status 5</option>
												</select>
												<span className="fa fa-caret-down"></span>
												<p>E.G:  NEW, USED, CERTIFIED</p>
											</div>
										</div>
										<div className="m-secondSelects">
											<div className="col-xs-4">
												<select name="select4">
													<option value="0" selected="selected">Min Year</option>
													<option value="1">Min Year</option>
													<option value="2">Min Year</option>
													<option value="3">Min Year</option>
													<option value="4">Min Year</option>
													<option value="5">Min Year</option>
												</select>
												<span className="fa fa-caret-down"></span>
											</div>
											<div className="col-xs-4">
												<select name="select5">
													<option value="0" selected="selected">Max Year</option>
													<option value="1">Max Year</option>
													<option value="2">Max Year</option>
													<option value="3">Max Year</option>
													<option value="4">Max Year</option>
												</select>
												<span className="fa fa-caret-down"></span>
											</div>
										</div>
									</div>
									<div className="col-md-4 col-xs-12 text-left s-noPadding">
										<div className="b-search__main-form-range">
											<label>PRICE RANGE</label>
											<div className="slider"></div>
											<input type="hidden" name="min" className="j-min" value="" />
											<input type="hidden" name="max" className="j-max" value="" />
										</div>
										<div className="b-search__main-form-submit">
											<a href="#">Advanced search</a>
											<button type="submit" className="btn m-btn">Search the Vehicle<span className="fa fa-angle-right"></span></button> 
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</section>

			</>
		)
	}
}

export default Search;