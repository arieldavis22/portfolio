import React from 'react'
// import { Image } from 'semantic-ui-react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import '../css/Project.css'

const Project = () => {

    const content = [
        {
            name: 'test1',
            image: require('../img/dl_logo.png')
        },
        {
            name: 'test2',
            image: require('../img/gt_page.png')
        },
        {
            name: 'test3',
            image: require('../img/fp_page.png')
        }
    ]
    return (  
        <>
        <div className='container'>
            <div className='desc'>
                <p>Recent and relevent projects that Ariel Davis has worked on include:</p>
            </div>
            <div className='wrapper'>
                <Slider>
                    {content.map((item, index) => (
                        <div
                        key={index}
                        className='slider-content'
                        style={{ background: `url('${item.image}') no-repeat center center`, backgroundSize: '800px 415px' }}>
                            <div className='inner'>
                                <h1>{item.name}</h1>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
        
        </>
    );
}

export default Project;