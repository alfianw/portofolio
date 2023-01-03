import React from "react";
import { Typewriter } from 'react-simple-typewriter'
import '../style/Home.css'
import 'animate.css';

const Home = ()=>{
    return(
        <div className="home" id="1">
            <div className="article">
                <p className="animate__animated animate__rotateInDownLeft">Hello!</p>
                <h1 className="animate__animated animate__lightSpeedInLeft animate__delay-2s">My name is <span id="name">Muhamad Alfian Widjaya.</span></h1>
                <h2 className="animate__animated animate__rotateInUpLeft animate__delay-3s">I am a <span id="work">
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
                <a href="#2" id="btn-home" className="animate__animated animate__fadeInUpBig animate__delay-5s">About Me</a>
            </div>
        </div>
    );
}

export default Home;