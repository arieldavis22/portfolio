import React from 'react';
import Navbar from './components/Navbar';
import Bio from './components/Bio';
import Project from './components/Project';
import Social from './components/Social';
import Contact from './components/Contact';
import Fade from 'react-reveal/Fade';
import './css/App.css'

function App() {
  return (
    <div>
      <Navbar />
      <Fade bottom>
        <Bio />
        <Project />
      </Fade>
      <Social />
      <Contact />
    </div>
  );
}

export default App;
