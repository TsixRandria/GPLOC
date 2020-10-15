import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './Pages/Header/Header.js';
import HomePages from './Pages/HomePages/HomePage.js';
import Contact from './Pages/Contact/Contact.js';
import Login from './Pages/Login/Login.js';
import Signup from './Pages/Signup/Signup.js';
import Aeroport from './Pages/Aeroport/Aeroport.js';
import Saint from './Pages/Saint/Saint.js';
import Condition from './Pages/Condition/Condition.js';
import Footer from './Pages/Footer/Footer.js';

import './App.scss';



function App() {
  return (
    <BrowserRouter>
        <Header /> 
        <Route exact path='/' component={HomePages} />
        <Route exact path='/Contact' component={Contact} />
        <Route exact path='/Login' component={Login} />
        <Route exact path='/Signup' component={Signup} />
        <Route exact path='/Aeroport' component={Aeroport}/>
        <Route exact path='/Sainte-Marie' component={Saint}/>
        <Route exact path='/Condition' component={Condition}/>
          <Footer />  
    </BrowserRouter>
  );
}

export default App;
