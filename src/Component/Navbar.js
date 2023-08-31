import React, { useEffect, useState } from 'react'
import '../style/Navbar.css';

const Navbar = () => {

    const [navActive, setNavActive] = useState(0)

    const handleClick = () => {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".navMenu");
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    };

    const handleNav = (a)=>{
        setNavActive(a)
    }


    return (
        <div className='navbar'>
            <nav>
                <h1 id='logo1'>Yan</h1>
                <ul className='navMenu'>
                    <li className='navItem'><a className={`navLink ${navActive === 1? "active" : ""}`} onClick={()=> handleNav(1)} href="#1">Home</a></li>
                    <li className='navItem'><a className={`navLink ${navActive === 3? "active" : ""}`} onClick={()=> handleNav(3)} href="#3">Skills</a></li>
                    <li className='navItem'><a className={`navLink ${navActive === 4? "active" : ""}`} onClick={()=> handleNav(4)} href="#4">Portofolio</a></li>
                    <li className='navItem'><a href="#5" className={`btn-contact ${navActive === 5? "active" : ""}`} onClick={()=> handleNav(5)}>Contact</a></li>
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