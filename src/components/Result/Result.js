import React, {Component} from 'react';

class Result extends React.Component{
	render(){
		return(
			<>
			 <section className="b-pageHeader">
		        <div className="container">
		            <h1 className=" wow zoomInLeft" data-wow-delay="0.5s">Auto Listings</h1>
		            <div className="b-pageHeader__search wow zoomInRight" data-wow-delay="0.5s">
		                <h3>Your search returned 28 results</h3>
		            </div>
		        </div>
		    </section>
		    
		   
		        
		    
		    <div className="b-items">
		        <div className="container">
		            <div className="row">
		                <div className="col-lg-3 col-sm-4 col-xs-12">
		                    <aside className="b-items__aside">
		                        <h2 className="s-title wow zoomInUp" data-wow-delay="0.5s">REFINE YOUR SEARCH</h2>
		                        <div className="b-items__aside-main wow zoomInUp" data-wow-delay="0.5s">
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
		                                        <div className="slider"></div>
		                                        <input type="hidden" name="min" value="100" className="j-min" />
		                                        <input type="hidden" name="max" value="1000" className="j-max" />
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
		                                    <button type="submit" className="btn m-btn">FILTER VEHICLES<span className="fa fa-angle-right"></span></button><br />
		                                    <a href="">RESET ALL FILTERS</a>
		                                </footer>
		                            </form>
		                        </div>
		                        <div className="b-items__aside-sell wow zoomInUp" data-wow-delay="0.5s">
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
		                        <div className="b-items__cars-one wow zoomInUp" data-wow-delay="0.5s">
		                            <div className="b-items__cars-one-img">
		                                <img src="/images/produit/c1.jpg" alt='C1 ou toyota'/>
		                                <span className="b-items__cars-one-img-type m-premium">2 véhicules en stock</span>
		                            </div>

		                            <div className="b-items__cars-one-info">
		                                <form className="b-items__cars-one-info-header s-lineDownLeft">
		                                    <h2>Citroën C1 ou Toyota Aygo</h2>
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
		                                                <h3>273.00€</h3>
		                                                <p>dont 100 € d'acompte</p>
		                                            </div>
		                                            <a href="detail.html" className="btn m-btn">VIEW DETAILS<span className="fa fa-angle-right"></span></a>
		                                        </div>
		                                    </div>
		                                </div>
		                            </div>
		                        </div>

		                        <div className="b-items__cars-one wow zoomInUp" data-wow-delay="0.5s">
		                            <div className="b-items__cars-one-img">
		                                <img src="/images/produit/clio.jpg" alt='C1 ou toyota'/>
		                                <span className="b-items__cars-one-img-type m-premium">3 véhicules en stock</span>
		                            </div>

		                            <div className="b-items__cars-one-info">
		                                <form className="b-items__cars-one-info-header s-lineDownLeft">
		                                    <h2>Renault Clio 4</h2>
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
		                                                <h3>291.00€</h3>
		                                                <p>dont 100 € d'acompte</p>
		                                            </div>
		                                            <a href="detail.html" className="btn m-btn">VIEW DETAILS<span className="fa fa-angle-right"></span></a>
		                                        </div>
		                                    </div>
		                                </div>
		                            </div>
		                        </div>

		                        

		                        <div className="b-items__cars-one wow zoomInUp" data-wow-delay="0.5s">
		                            <div className="b-items__cars-one-img">
		                                <img src="/images/produit/duster1.jpg" alt='maxima'/>
		                                <span className="b-items__cars-one-img-type m-listing">Dernier véhicule en stock</span>
		                            </div>
		                            <div className="b-items__cars-one-info">
		                                <form className="b-items__cars-one-info-header s-lineDownLeft">
		                                    <h2>Dacia Duster Diesel</h2>
		                                </form>
		                                <div className="row s-noRightMargin">
		                                    <div className="col-md-9 col-xs-12">
		                                        <p>In a pickup market gone fancy, the Silverado sticks to its basic-truck recipe. The steering is accurate, and the Silverado</p>
		                                        <div className="row m-smallPadding m-width">
		                                            <div className="col-xs-6">
		                                                <div className="row m-smallPadding">
		                                                    <div className="col-xs-6">
		                                                        <span className="b-items__cars-one-info-title">Body Style:</span>
		                                                        <span className="b-items__cars-one-info-title">Mileage:</span>
		                                                        <span className="b-items__cars-one-info-title">Transmission:</span>
		                                                    </div>
		                                                    <div className="col-xs-6">
		                                                        <span className="b-items__cars-one-info-value">Convertible</span>
		                                                        <span className="b-items__cars-one-info-value">10,000 KM</span>
		                                                        <span className="b-items__cars-one-info-value">7-Speed Dual-Clutch</span>
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
		                                                        <span className="b-items__cars-one-info-value">16-valve</span>
		                                                        <span className="b-items__cars-one-info-value">Black</span>
		                                                        <span className="b-items__cars-one-info-value">5-Passenger, 2-Door</span>
		                                                    </div>
		                                                </div>
		                                            </div>
		                                        </div>
		                                    </div>
		                                    <div className="col-md-3 col-xs-12">
		                                        <div className="b-items__cars-one-info-price">
		                                            <div className="pull-right">
		                                                <h3>362.00€ </h3>
		                                                <p>dont 100 € d'acompte</p>
		                                            </div>
		                                            <a href="detail.html" className="btn m-btn">VIEW DETAILS<span className="fa fa-angle-right"></span></a>
		                                        </div>
		                                    </div>
		                                </div>
		                            </div>
		                        </div>		 
		                    </div>		                
		                </div>
		            </div>
		        </div>
		    </div>
		    </>
			)
	}
}
export default Result;