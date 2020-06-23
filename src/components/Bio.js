import React from 'react'
import { Image } from 'semantic-ui-react'
import '../css/Bio.css'

const Bio = () => {

    return (  
        <div className="bio container">
            <Image 
            src={require('../img/ariel_davis.jpg')} 
            size='medium' 
            circular/>
            <div>
                <p>
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