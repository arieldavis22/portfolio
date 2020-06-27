import React, {useEffect} from 'react'
import anime from 'animejs/lib/anime.es.js';
import '../css/Navbar.css'


const Navbar = () => {
    
    //anime.js transition from left side of screen to right
    useEffect(() => {
        anime({
            targets: '.navbar',
            translateX: 1000,
            easing: 'easeOutElastic(1, 1)',
            duration: 3001
        })
    })
    return (  
        //all buttons that will lead to different componenets
        <div className="navbar">
            <button>Bio</button>
            <button>Projects</button>
            <button>Social</button>
            <button>Contact</button>
        </div>
    );
}

export default Navbar;