import React, { Component } from 'react';

 class Bread extends Component {
    render() {
        return (
            <div>
                		<div class="b-breadCumbs s-shadow">
                            <div class="container">
                                <a href="home.html" class="b-breadCumbs__page">Home</a><span class="fa fa-angle-right"></span><a href="about.html" class="b-breadCumbs__page m-active">Sainte-Marie</a>
                            </div>
                        </div>
            </div>      
        )
    }
}
export default Bread;