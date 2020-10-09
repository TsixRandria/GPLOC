import React from 'react';
import { Link } from 'react-router-dom';

import './Style.css';

class Header extends React.Component {
	render() {
		return (
			<>
				{/* <div id=""><span className="spinner"></span></div>
					<div className="switcher-wrapper">	
						<div className="demo_changer">
							<div className="demo-icon customBgColor"><i className="fa fa-cog fa-spin fa-2x"></i></div>
							<div className="form_holder">
								<div className="row">
									<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
										<div className="predefined_styles">
											<div className="skin-theme-switcher">
												<h4>Color</h4>
												<a href="#" data-switchcolor="color1" className="styleswitch" > </a>
												<a href="#" data-switchcolor="color2" className="styleswitch" > </a>
												<a href="#" data-switchcolor="color3" className="styleswitch" > </a>
												<a href="#" data-switchcolor="color4" className="styleswitch" > </a>
												<a href="#" data-switchcolor="color5" className="styleswitch" > </a>
												<a href="#" data-switchcolor="color6" className="styleswitch" > </a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>														
				 */}

					<header className="b-topBar">
						<div className="container wow slideInDown" data-wow-delay="0.7s">
							<div className="row">
								<div className="col-md-3 col-xs-6">
									<div className="b-topBar__addr">
										<span className="fa fa-map-marker"></span>
										34 rue de la Plantation
									</div>
								</div>
								<div className="col-md-2 col-xs-6">
									<div className="b-topBar__tel">
										<span className="fa fa-phone"></span>
										06-92-370-380
									</div>
								</div>
								<div className="col-md-5 col-xs-6">
									<nav className="b-topBar__nav">
										<ul>
											<li><Link to="/Contact">Contact</Link></li>
											<li><Link to="/Login">Se Connecter</Link></li>
											<li><Link to="/Signup">S'inscrire</Link></li>
										</ul>
									</nav>
								</div>
								<div className="col-md-2 col-xs-6">
									<div className="b-topBar__lang">
										<div className="dropdown">
											<a href="#" className="dropdown-toggle" data-toggle='dropdown'>Language</a>
											<a className="m-langLink dropdown-toggle" data-toggle='dropdown' href="#"><span className="b-topBar__lang-flag m-en"></span>EN<span className="fa fa-caret-down"></span></a>
											<ul className="dropdown-menu h-lang">
												<li><a className="m-langLink dropdown-toggle" data-toggle='dropdown' href="#"><span className="b-topBar__lang-flag m-en"></span>EN</a></li>
												<li><a className="m-langLink dropdown-toggle" data-toggle='dropdown' href="#"><span className="b-topBar__lang-flag m-es"></span>ES</a></li>
												<li><a className="m-langLink dropdown-toggle" data-toggle='dropdown' href="#"><span className="b-topBar__lang-flag m-de"></span>DE</a></li>
												<li><a className="m-langLink dropdown-toggle" data-toggle='dropdown' href="#"><span className="b-topBar__lang-flag m-fr"></span>FR</a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</header>															

					<nav className="b-nav">
						<div className="container">
							<div className="row">
								<div className="col-sm-3 col-xs-4">
									<div className="b-nav__logo wow slideInLeft" data-wow-delay="0.3s">
										<h3><a href="home.html">GP<span>Location</span></a></h3>
										<h2><a href="/">Location de voiture à la REunion</a></h2>
									</div>
								</div>
								<div className="col-sm-9 col-xs-8">
									<div className="b-nav__list wow slideInRight" data-wow-delay="0.3s">
										<div className="navbar-header">
											<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#nav">
												<span className="sr-only">Toggle navigation</span>
												<span className="icon-bar"></span>
												<span className="icon-bar"></span>
												<span className="icon-bar"></span>
											</button>
										</div>
										<div className="collapse navbar-collapse navbar-main-slide" id="nav">
											<ul className="navbar-nav-menu">
												<li className="dropdown">
													<Link to="/">Home</Link>								
												</li>
												
												<li><Link to="/Aeroport">Aéroport de Roland-Garros</Link></li>
												<li><Link to="Saint">Sainte-Marie</Link></li>
												<li><Link to="/Condition">Nos Conditions</Link></li>
												
	
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</nav>
			</>

		)
	}
}


export default Header;