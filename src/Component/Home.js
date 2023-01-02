import React from "react";
import { Typewriter } from 'react-simple-typewriter'
import '../style/Home.css'

const Home = ()=>{
    return(
        <div className="home" id="1">
            <div className="article">
                <p>Hello!</p>
                <h1>My name is <span id="name">Muhamad Alfian Widjaya.</span></h1>
                <h2>I am a <span id="work">
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
                <a href="#2" id="btn-home">About Me</a>
            </div>
        </div>
    );
}

export default Home;