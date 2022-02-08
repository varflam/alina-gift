import React from 'react';

import Navigation from '../navigation/Navigation';
import MainPage from '../pages/mainPage/MainPage';
import Footer from '../footer/Footer';

import '../../style/style.sass';

function App() {
  return (
    <div className="app">
      <Navigation/>
      <MainPage/>
      <Footer/>
    </div>
  );
}

export default App;
