import React, { Component } from 'react';
import './Login.css'

class Login extends Component {
    render() {
        return (
            <div>
               <div class="cont">
                <div id="success" class="success1">
                <h1>Se connecter</h1>  
                    <form id="contactForm" noValidate className="s-form wow zoomInUp" data-wow-delay="0.5s">
                    <input type="text" placeholder="VOTRE EMAIL" defaultValue="" name="user-name" id="name" />
                    <input type="text" placeholder="VOTRE MOT DE PASSE" defaultValue="" name="user-name" id="name" />
                    <button type="submit" className="btn m-btn">CONNEXION<span className="fa fa-angle-right"></span></button>
                    </form>
                    </div>
				</div>


            </div>
        )
    }
}
export default Login;