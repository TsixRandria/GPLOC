import React from 'react';
import { Link } from 'react-router-dom'
const Topbar = () =>{
    return (
        <>
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
							06 92 370 380
						</div>
					</div>
					<div className="col-md-6 col-xs-6">
						<nav className="b-topBar__nav">
							<ul>
								<li><Link to="/Signup" >S'inscrire</Link></li>
								<li><Link to="/Login" >Se connecter</Link></li>
								<li><Link to="/Contact" >Contact</Link></li>
							</ul>
						</nav>
					</div>

				</div>
			</div>
		</header>
        </>
    )
}
export default Topbar;