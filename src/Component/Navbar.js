import React, { useEffect } from 'react'
import '../style/Navbar.css';
import 'animate.css';

const Navbar = () => {

    const handleClick = () => {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".navMenu");
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
      };

    return (
        <div className='navbar animate__animated animate__fadeInDown'>
            <nav>
                <h1>Yan</h1>
                <ul className='navMenu'>
                    <li className='navItem'><a href="#1">Home</a></li>
                    <li className='navItem'><a href="#3">Skills</a></li>
                    <li className='navItem'><a href="#4">Portofolio</a></li>
                    <li className='navItem'><a href="#5" id='btn-contact'>Contact</a></li>
                </ul>

                <div className='hamburger' onClick={handleClick}>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </div>

            </nav>
        </div>
    )

}

export default Navbar;