import React from 'react'
import { Image } from 'semantic-ui-react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import '../css/Project.css'

const Project = () => {
    return (  
        <div className='wrapper'>
            <Slider>
                <div>
                    <Image src={require('../img/dl_logo.png')} size='large' />
                    <h1>Test</h1>
                </div>
                <div>
                    <Image src={require('../img/gt_logo.png')} size='large'/>
                </div>
                <div>
                    <Image src={require('../img/fp_logo.png')} size='large' />
                </div>
            </Slider>
        </div>
    );
}

export default Project;