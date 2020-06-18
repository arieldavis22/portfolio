import React from 'react';
import Navbar from './components/Navbar';
import Bio from './components/Bio';
import Project from './components/Project';
import Social from './components/Social';
import Contact from './components/Contact';
import RubberBand from 'react-reveal/RubberBand';

function App() {
  return (
    <div>
      <Navbar />
      <RubberBand>
        <Bio />
      </RubberBand>
      <Project />
      <Social />
      <Contact />
    </div>
  );
}

export default App;
