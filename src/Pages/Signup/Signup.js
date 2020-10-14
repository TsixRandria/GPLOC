import React, { Component } from 'react';
import './Signup.css';

 class Signup extends Component {
    render() {
        return (
            <div>
                <div class="cont">
                <div id="success" class="success1" >
                <h1>Inscription</h1>  
                    <form id="contactForm" noValidate className="s-form wow zoomInUp" data-wow-delay="0.5s">
                    <input type="text" placeholder="NOM" defaultValue="" name="user-name" id="name" />
                    <input type="text" placeholder="PRENOM" defaultValue="" name="user-lastname" id="name" />
                    <input type="text" placeholder="TELEPHONE" defaultValue="" name="user-phone" id="name" />
                    <input type="text" placeholder="EMAIL" defaultValue="" name="user-email" id="name" />
                    <input type="text" placeholder="MOT DE PASSE" defaultValue="" name="user-password" id="name" />
                    <button type="submit" className="btn m-btn">INSCRIPTION<span className="fa fa-angle-right"></span></button>
                    </form>
                    </div>
				</div>
            
            
            </div>
        )
    }
}
export default Signup