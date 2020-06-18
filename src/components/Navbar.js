import React, {useEffect} from 'react'
import anime from 'animejs/lib/anime.es.js';
import '../css/Navbar.css'


const Navbar = () => {
    
    useEffect(() => {
        anime({
            targets: '.navbar',
            translateX: 1000,
            easing: 'spring(1, 80, 15, 0)'
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