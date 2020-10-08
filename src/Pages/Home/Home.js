import React, { Component } from 'react';
import './Style.css'

import Header from './Components/Header/Header';
import About from './Components/About/About';
import Guides from './Components/Guides/Guides';

 class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <About />
                <Guides />
            </div>
        )
    }
}
export default Home;
