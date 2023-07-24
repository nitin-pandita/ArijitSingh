import React from 'react';
// Global style
import GlobalStyle from './components/GlobalStyle';
// importing new pages
import AboutArijit from './pages/AboutArijit';
import SongList from './pages/SongList';
// importing about us page
import AboutUs from './pages/AboutUs';

import Socials from './pages/Socials'

// Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { styled } from 'styled-components';
const App = () => {
  return (
    <div className="app">
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path='/' element={<AboutUs />} />
        <Route path='/about' element={<AboutArijit />} />
        <Route path='/list' element={<SongList />} />
        <Route path='/social' element={<Socials />} />
      </Routes>
    </div>
  );
};


export default App;

