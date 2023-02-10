import React, { useEffect } from "react";
import { Typewriter } from 'react-simple-typewriter'
import '../style/Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, []);
    return (
        <div className="home" id="1">
            <div className="article">
                <p data-aos="fade-right">Hello!</p>
                <h1 data-aos="fade-left" >My name is <span id="name">Muhamad Alfian Widjaya.</span></h1>
                <h2 data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">I am a <span id="work">
                        <Typewriter
                            words={['Full Stack Developer.', 'Front End Developer.', 'Back End Developer.',]}
                            loop={true}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span></h2>
                <span data-aos="fade-up"
                    data-aos-duration="3000"><a href="#2" id="btn-home">About Me</a></span>
            </div>
        </div>
    );
}

export default Home;