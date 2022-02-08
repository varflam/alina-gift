import React from 'react';

import Navigation from '../navigation/Navigation';
import MainPage from '../pages/mainPage/MainPage';
import ContactPage from '../pages/contactPage/ContactPage';
import AboutPage from '../pages/aboutPage/AboutPage';
import Footer from '../footer/Footer';

import '../../style/style.sass';

function App() {
  return (
    <div className="app">
      <Navigation/>
      {/* <MainPage/> */}
      {/* <ContactPage/> */}
      <AboutPage/>
      <Footer/>
    </div>
  );
}

export default App;
