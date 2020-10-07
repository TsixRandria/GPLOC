import React from 'react';



class Header extends React.Component {
	render() {
		return (
			<>
				<div id=""><span className="spinner"></span></div>
				

				
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
				

				<header className="b-topBar">
					<div className="container wow slideInDown" data-wow-delay="0.7s">
						<div className="row">
							<div className="col-md-4 col-xs-6">
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
							<div className="col-md-4 col-xs-6">
								<nav className="b-topBar__nav">
									<ul>
										<li><a href="#">Cart</a></li>
										<li><a href="#">Register</a></li>
										<li><a href="#">Sign in</a></li>
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
												<a className="dropdown-toggle" data-toggle='dropdown' href="home.html">Home <span className="fa fa-caret-down"></span></a>
												<ul className="dropdown-menu h-nav">
													<li><a href="home.html">Home Page 1</a></li>
													<li><a href="home-2.html">Home Page 2</a></li>
												</ul>
											</li>
											<li className="dropdown">
												<a className="dropdown-toggle" data-toggle='dropdown' href="#">Grid <span className="fa fa-caret-down"></span></a>
												<ul className="dropdown-menu h-nav">
													<li><a href="listings.html">listing 1</a></li>
													<li><a href="listingsTwo.html">listing 2</a></li>
													<li><a href="listTable.html">listing 3</a></li>
													<li><a href="listTableTwo.html">listing 4</a></li>
												</ul>
											</li>
											<li><a href="compare.html">compare</a></li>
											<li><a href="about.html">About</a></li>
											<li><a href="article.html">Services</a></li>
											<li className="dropdown">
												<a className="dropdown-toggle" data-toggle='dropdown' href="#">Blog <span className="fa fa-caret-down"></span></a>
												<ul className="dropdown-menu h-nav">
													<li><a href="blog.html">Blog 1</a></li>
													<li><a href="blogTwo.html">Blog 2</a></li>
													<li><a href="404.html">Page 404</a></li>
												</ul>
											</li>
											<li><a href="submit1.html">Shop</a></li>
											<li><a href="/Contact.js">Contact</a></li>
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