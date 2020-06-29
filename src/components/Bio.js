import React from 'react'
import { Image } from 'semantic-ui-react'
import '../css/Bio.css'

const Bio = () => {

    return (  
        <div className="bio container">
            {/* image for my face */}
            <Image 
            src={require('../img/ariel_davis.jpg')} 
            size='medium' 
            circular/>
            <div>
                {/* main content of my bio */}
                <p >
                    Full stack web developer with a passion for expansive learning. <br/> 
                    Experience in Ruby on Rails, JavaScript, and React tied to robotics and programming <br/>
                    via work with the Technology Student Association. Deeply invested in problem solving, <br/>
                    user experience and possess strong skills in team-building, deadline management, and <br/>
                    communications that now fluently transfer into work as a developer.
                </p>
            </div>
        </div>
    );
}

export default Bio;


    // const [on, setOn] = useState(false)

    // const { x } = useSpring({
    //     from: { xy: [0, 0], c: 0 },
    //     x: on ? 1 : 0,
    //     config: config.slow
    // })

    // const toggle = () => {
    //     setOn(!on)
    // }

    // style={
    //     {transform: x.interpolate({
    //         range: [0, .25, .5, .75, 1],
    //         output: [0, 500, 200, 800, 500]
    //     }).interpolate(x => `translateX(${x}px)`)}}
    //     onClick={toggle}