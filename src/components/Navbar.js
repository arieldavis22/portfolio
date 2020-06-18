import React, {useEffect} from 'react'
import anime from 'animejs/lib/anime.es.js';
import '../css/Navbar.css'


const Navbar = () => {
    
    useEffect(() => {
        anime({
            targets: '.navbar',
            translateX: 1000,
            easing: 'easeOutElastic(1, 1)',
            duration: 3001
        })
    })
    return (  
        <div className="navbar">
            <button>Bio</button>
            <button>Projects</button>
            <button>Social</button>
            <button>Contact</button>
        </div>
    );
}

export default Navbar;