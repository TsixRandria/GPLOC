import React, {Component} from 'react';

class Register extends React.Component{
	render(){
		return(
				<div className="b-contacts__form">
					<header className="b-contacts__form-header s-lineDownLeft wow zoomInUp" data-wow-delay="0.5s">
						<h2 className="s-titleDet">Vous voulez contacter GP Location ?</h2>
					</header>
					<p className=" wow zoomInUp" data-wow-delay="0.5s">Vous rencontrez une difficulté lors de votre réservation sur notre site ? Vous souhaitez nous faire part d'un bug ?</p>
					<div id="success"></div>
					<form id="contactForm" noValidate className="s-form wow zoomInUp" data-wow-delay="0.5s">
						<div className="s-relative">
							<span className="fa fa-caret-down"></span>
						</div>
						<input type="text" placeholder="VOTRE NOM" defaultValue="" name="user-name" id="user-name" />
						<input type="text" placeholder="VOTRE ADDRESS EMAIL %" defaultValue="" name="user-email" id="user-email" />
						<input type="text" placeholder="VOTRE NUMERO TELEPHONE." defaultValue="" name="user-phone" id="user-phone" />
						<textarea id="user-message" name="user-message" placeholder="COMMENTAIRE/SUGGESTIONS/FEEDBACK"></textarea>
						<button type="submit" className="btn m-btn">SUBMIT NOW<span className="fa fa-angle-right"></span></button>
					</form>
				</div>
		)
	}
}
export default Register;