import React, { useState } from 'react'
import { Image } from 'semantic-ui-react'
import '../css/Bio.css'
// import { Canvas } from 'react-three-fiber'
// import Box from './Box'
import { useSpring, animated } from 'react-spring';

const Bio = () => {

    const [on, setOn] = useState(false)

    const { xy, c } = useSpring({
        from: { xy: [0, 0], c: 'green' },
        xy: on ? [800, 200] : [0, 0],
        c: on ? 'red' : 'green'
    })

    const toggle = () => {
        setOn(!on)
    }

    return (  
        <div className="bio container">
            {/* image for my face */}
            <Image 
            src={require('../img/ariel_davis.jpg')} 
            size='medium' 
            circular/>
            <div>
                {/* main content of my bio */}
                <animated.p 
                style={
                    {transform: xy.interpolate((x, y) => `translate(${x}px, ${y}px)`),
                    color: c.interpolate(c => c)}} 
                    onClick={toggle}>
                    Full stack web developer with a passion for expansive learning. <br/> 
                    Experience in Ruby on Rails, JavaScript, and React tied to robotics and programming <br/>
                    via work with the Technology Student Association. Deeply invested in problem solving, <br/>
                    user experience and possess strong skills in team-building, deadline management, and <br/>
                    communications that now fluently transfer into work as a developer.
                </animated.p>
            </div>
            {/* <Canvas colorManagement>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Box position={[0, 0, 0]} />
            </Canvas> */}
        </div>
    );
}

export default Bio;