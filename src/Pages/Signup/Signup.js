import React, { Component } from 'react';
import './Style.css';

 class Signup extends Component {
    render() {
        return (
            <div>
                <div class="cont">
                <div id="success" class="success1" >
                <h1>Inscription</h1>  
                    <form id="contactForm" noValidate className="s-form wow zoomInUp" data-wow-delay="0.5s">
                    <input type="text" placeholder="VOTRE NOM" defaultValue="" name="user-name" id="user-name" />
                    <input type="text" placeholder="VOTRE PRENOM" defaultValue="" name="user-name" id="user-name" />
                    <input type="text" placeholder="TELEPHONE" defaultValue="" name="user-name" id="user-name" />
                    <input type="text" placeholder="VOTRE EMAIL" defaultValue="" name="user-name" id="user-name" />
                    <input type="text" placeholder="VOTRE MOT DE PASSE" defaultValue="" name="user-name" id="user-name" />
                    <button type="submit" className="btn m-btn">INSCRIPTION<span className="fa fa-angle-right"></span></button>
                    </form>
                    </div>
				</div>
            
            
            </div>
        )
    }
}
export default Signup