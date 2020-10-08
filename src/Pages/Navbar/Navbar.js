import React from 'react';
import { Link } from 'react-router-dom'
import './Style.css'

const Navbar = () =>{
    return (
        <>
          <nav className="b-nav">
			<div className="container">
				<div className="row">
					<div className="col-sm-3 col-xs-4">
						<div className="b-nav__logo wow slideInLeft" data-wow-delay="0.3s">
							<h3><a href="#">GP<span>Location</span></a></h3>
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
									<Link to="/" >Home</Link>	
									</li>
									<li>
                                       <Link to="/Aeroport" >Aéroport de la Réunion Roland-Garros</Link> 
                                    </li>
									<li>
                                       <Link to="/Sainte" >Sainte-Marie</Link>
                                    </li>
									<li>
                                       <Link to="/Condition" >Conditions générales de location</Link> 
                                    </li>
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
export default Navbar;