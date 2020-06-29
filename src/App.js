import React from 'react';
import Navbar from './components/Navbar';
import Bio from './components/Bio';
// import Project from './components/Project';
// import Social from './components/Social';
// import Contact from './components/Contact';
// import Fade from 'react-reveal/Fade';
import './css/App.css'
import { Canvas } from 'react-three-fiber'
import Box from './components/Box'

function App() {
  return (
    <>
      <Navbar />
      <div className='back'>
      <Canvas colorManagement>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Box position={[0, 0, 0]} />
      </Canvas>
      </div>
      <div className="main">
          <Bio />
          {/* <Project />
          <Social />
          <Contact /> */}
      </div>
    </>
  );
}

export default App;
