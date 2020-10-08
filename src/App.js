import React from 'react';


import Header from './Contacts/Header/Header';
import Footer from './Contacts/Footer/Footer';
import Slider from './Pages/HomePages/Components/Slider/Slider';
import Search from './Pages/HomePages/Components/Search/Search';
import World from './Pages/HomePages/Components/World/World';
import Featured from './Pages/HomePages/Components/Featured/Featured';
import Welcome from './Pages/HomePages/Components/Welcome/Welcome';
import Home from './Pages/HomePages/Components/HomeReviews/Home';
import Asks from './Pages/HomePages/Components/Asks/Asks';



function App() {
  return (
    <>
      <Header />
      <Slider />
      <Search />
      <World />
      <Featured />
      <Welcome />
      <Home />
      <Asks />


      

      <Footer />

      
    </>
  );
}

export default App;
