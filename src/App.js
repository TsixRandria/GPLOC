import React from 'react';


import './css/animate.css';
import './css/home-2.css';
import './css/bootstrap.css';
import './css/colors.css';
import './css/colors-demo.css';
import './css/blog.css';
import './css/compare.css';
import './css/custom.css';
import './css/detail.css';
import './css/doc.css';
import './css/font-awesome.min.css';
import './css/home-2.css';
import './css/jquery.bxslider.css';
import './css/listings.css';
import './css/master.css';
import './css/pages.css';
import './css/responsive.css';
import './css/site-colors.css';
import './css/start-page.css';
import './css/submits.css';
import './css/theme.css';




import Header from './components/Header/Header';


import Slider from './components/Contenue/Slider';
import Search from './components/Contenue/Search';
import World from './components/Contenue/World';
import Welcome from './components/Contenue/Welcome';
import Client from './components/Contenue/Client';
import Asks from './components/Contenue/Asks';



import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
      <Header />

      <Slider />

      <Search />

      <World />

      <Welcome />

      <Client />

      <Asks />

      <Footer />

      
    </>
  );
}

export default App;
