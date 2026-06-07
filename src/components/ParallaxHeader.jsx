import React, { useEffect } from "react";
import '../style/componentStyle/parallaxHeader.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { Typewriter } from 'react-simple-typewriter';
import About from "./About";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import Skills from "../pages/Skills";
import Experience from "../pages/Experience";

const ParallaxHeader = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, []);
    return (
        <div className="wrapper">
            <div className="paralax_group header">
                <div className="paralax_layer sky"></div>
                <div className="paralax_layer wrapper_sky_diving">
                    <div className=" sky_diving"></div>
                    <div className="text_wrapper">
                        <h3>Hello! I'm</h3>
                        <h1 id="name-home">Muhamad Alfian Widjaya</h1>
                        <h2 data-aos-offset="300" data-aos-easing="ease-in-sine">I'm a <span id="work">
                            <Typewriter
                                words={['Full Stack Developer.', 'WebMethods Developer.', 'ReactJS Developer.', 'Java Developer.',]}
                                loop={true}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span></h2>
                    </div>
                </div>
                <div className="paralax_layer cloud">
                    <About />
                    <Skills />
                    <Experience />
                    <Portfolio />
                    <Contact />
                </div>
            </div>
        </div>
    )
}

export default ParallaxHeader