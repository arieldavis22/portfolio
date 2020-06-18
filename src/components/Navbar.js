import React, {useEffect} from 'react'
import anime from 'animejs/lib/anime.es.js';


const Navbar = () => {
    
    useEffect(() => {
        anime({
            targets: '.navbar',
            translateX: 950,
            duration: 2500,
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