import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import HomePage from './Pages/HomePages/HomePage';




function App() {
  return (
    <>
      <Router>
        <Header />
        <HomePage />
        <Footer />
      </Router>
      
    </>
  );
}

export default App;
