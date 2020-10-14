import React,{Component} from 'react';
import './Mentions.css';

class Mentions extends React.Component{
	render(){
		return(
			<>
				<section className="b-more">
				<div className="container">
					<div className="row">
						<div className="text-center">
							<div className="b-more__why wow zoomInLeft" data-wow-delay="0.5s" style={{visibility: "visible", animationDelay: "0.5s", animationName: "zoomInLeft"}}>
								<h2 className="s-title">Mentions légales</h2>
								</div>
							</div>
								<p id="editeur"><strong>ÉDITEUR :</strong></p>
								<p id="content">	
									<strong>SARL GP Location,</strong><br/><br/> 
								<ul className="s-list">
									<li><span className="fa fa-check"></span> Siret : 482 868 478 000 17, SARL au capital de 20 000€</li>
									<li><span className="fa fa-check"></span>Adresse : 34 Rue de la Plantation - 97438 Sainte-Marie</li>
									<li><span className="fa fa-check"></span>Adresse email : infos@gplocation.fr </li>
									<li><span className="fa fa-check"></span>Directeur de publication : Vitry Jean François</li>
								</ul>
								</p>
								
								<ul id="list">
									<li>Conception / Réalisation du site : </li>
									<li>Hébergement : </li>
									<li>Siège social : </li>
								</ul>
						
					</div>
				</div>
				</section>
			</>
			)
	}
}

export default Mentions;