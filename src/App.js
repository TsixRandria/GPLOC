import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './Pages/Contacts/Header/Header';
import Footer from './Pages/Contacts/Footer/Footer';
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
