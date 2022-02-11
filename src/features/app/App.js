import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navigation from '../navigation/Navigation';
import MainPage from '../pages/mainPage/MainPage';
import ContactPage from '../pages/contactPage/ContactPage';
import AboutPage from '../pages/aboutPage/AboutPage';
import BlogPage from '../pages/blogPage/BlogPage';
import SinglePostPage from '../pages/singlePostPage/SinglePostPage';
import Footer from '../footer/Footer';

import '../../style/style.sass';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation/>
          <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="contacts" element={<ContactPage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/reviews" element={<BlogPage/>}/>
            <Route path="/reviews/:id" element={<SinglePostPage/>}/>
          </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
