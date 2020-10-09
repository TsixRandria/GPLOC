import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import HomePage from './Pages/HomePages/HomePage';

import Register from './Pages/Header/components/Register/Register';


function App() {
  return (
    <>
      <Router>
        <Header />
        

        <Register />
        <Footer />
      </Router>
      
    </>
  );
}

export default App;
