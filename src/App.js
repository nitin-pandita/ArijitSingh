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
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutSong from './pages/AboutSong';
import { AnimatePresence } from 'framer-motion'
const App = () => {
  const location = useLocation();
  console.log(location)
  return (
    <div className="app">
      <GlobalStyle />
      <Navbar />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<AboutUs />} />
          <Route path='/about' element={<AboutArijit />} />
          <Route path='/list' element={<SongList />} />
          <Route path='/list/:id' element={<AboutSong />} />
          <Route path='/social' element={<Socials />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};


export default App;

