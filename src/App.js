import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './Pages/Header/Header.js';
import HomePages from './Pages/HomePages/HomePage.js';
import Contact from './Pages/Contact/Contact.js';
import Aeroport from './Pages/Aeroport/Aeroport.js';

import Footer from './Pages/Footer/Footer.js';




function App() {
  return (
    <BrowserRouter>
        <Header />
        <Route exact path='/' component={HomePages} />
        <Route exact path='/Contact' component={Contact} />
        <Route exact path='/Aeroport' component={Aeroport}/>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
