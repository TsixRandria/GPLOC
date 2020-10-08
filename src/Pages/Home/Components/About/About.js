import React, { Component } from 'react'
import './Style.css'

 class About extends Component {
    render() {
        return (
            <>
                <div class="services-area">
                    <div class="container">
                        <div class="row justify-content-sm-center">
                            <div class="col-lg-4 col-md-6 col-sm-8">
                                <div class="single-services mb-30">
                                    <div class="features-icon">
                                        
                                    </div>
                                    <div class="features-caption">
                                        <h3>Besoin d'une voiture de location à la Réunion ?</h3>
                                        <p>
                                        Pour louer une voiture à la Réunion, rien de plus simple! 
                                        Réservez votre voiture en ligne avec <span>GP Location</span> .
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-8">
                                <div className="single-services mb-30">
                                    <div className="features-icon">
                                        
                                    </div>
                                    <div className="features-caption">
                                        <h3>Vous effectuez votre réservation en ligne.</h3>
                                        <p>  Réservez <span>7j/7, 24h/24</span>   votre voiture à la réunion au 
                                            meilleur prix sur notre site Internet.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-8">
                                <div className="single-services mb-30">
                                    <div className="features-icon">
                                       
                                    </div>
                                    <div className="features-caption">
                                        <h3>Confirmation de votre location de voiture.</h3>
                                        <p>
                                            Votre confirmation de réservation <br></br>est envoyée par 
                                            <span> email</span> prête à être imprimée
                                        </p>
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
export default About;