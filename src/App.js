import React from 'react';


import Header from './Contacts/Header/Header';
import Footer from './Contacts/Footer/Footer';
import HomePage from './Pages/HomePages/HomePage';
import Contact from './Contacts/Contacts/Contact';

import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header />
        
        <HomePage />
        
        <Route path="/Contacts/Contacts/Contact" exact component={Contact} />

      
        <Footer />
      </Router>
      
    </>
  );
}

export default App;
