import React, { Component } from 'react'
import './Style.css';


import Pheader from './Components/Pheader.js';
import Bread from './Components/Bread.js';
import Best from './Components/Best'
import Feature from './Components/Feature.js';
import What from './Components/What.js';
import More from './Components/More.js';
import Personnal from './Components/Personnal.js';


class Saint extends Component {
    render() {
        return (
            <div>
                <Pheader />
                <Bread />
                <Best />
                <What />
                <More />
                <Personnal />
                <Feature />
            </div>
        )
    }
}
export default Saint;