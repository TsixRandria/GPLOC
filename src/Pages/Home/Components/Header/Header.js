import React, { Component } from 'react'

 class Header extends Component {
    render() {
        return (
            <div>
                <section className="b-slider"> 
                    <div id="carousel" className="slide carousel carousel-fade">
                        <div className="carousel-inner">
                            <div className="item active">
                                <img src="/media/main-slider/1.jpg" alt="sliderImg" />
                                <div className="container">
                                    <div className="carousel-caption b-slider__info">
                                        <h3>Location</h3>
                                        <h2>De voiture à la Réunion</h2>
                                        <p>Depuis 10 ans, <strong>GP Location</strong> vous propose sa gamme de voitures de location à la Réunion. 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default Header;