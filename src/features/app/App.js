import React from 'react';

import Navigation from '../navigation/Navigation';
import MainPage from '../pages/mainPage/MainPage';
import ContactPage from '../pages/contactPage/ContactPage';
import AboutPage from '../pages/aboutPage/AboutPage';
import BlogPage from '../pages/blogPage/BlogPage';
import Footer from '../footer/Footer';

import '../../style/style.sass';

function App() {
  return (
    <div className="app">
      <Navigation/>
      {/* <MainPage/> */}
      {/* <ContactPage/>
      <AboutPage/> */}
      <BlogPage/>
      <Footer/>
    </div>
  );
}

export default App;
