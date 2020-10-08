import React from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import './App.scss';

import Topbar from './Pages/Topbar/Topbar.js';
import Navbar from './Pages/Navbar/Navbar.js';
import Home from './Pages/Home/Home.js';
import Contact from './Pages/Contact/Contact.js';
import Signup from './Pages/Signup/Signup.js';
import Login from './Pages/Login/Login.js';
import Aeroport from './Pages/Aeroport/Aeroport.js';
import Sainte from './Pages/Sainte/Sainte.js';
import Condition from './Pages/Condition/Condition'

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route exact path='/Contact' component={Contact} />
      <Route exact path='/Login' component={Login} />
      <Route exact path='/Signup' component={Signup} />
      <Route exact path='/Aeroport' component={Aeroport} />
      <Route exact path='/Sainte' component={Sainte} />
      <Route exact path='/Condition' component={Condition} />
    </BrowserRouter>
  );
}

export default App;
