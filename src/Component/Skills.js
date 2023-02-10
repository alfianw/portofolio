import React, { useEffect } from "react";
import '../style/Skills.css';
import html from '../Asset/html.png'
import css from '../Asset/css.png'
import js from '../Asset/JS.png'
import java from '../Asset/java.png'
import spring from '../Asset/spring.png'
import react from '../Asset/react.png'
import bootstrap from '../Asset/bootstrap.png'
import figma from '../Asset/figma.png'
import canva from '../Asset/canva.png'
import ps from '../Asset/ps.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, []);
    return (
        <div className="skill" id="3">
            <div className="card-skills">
                <h1 data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom">Skills</h1>
                <div className="warp-skills">
                    <img src={html} alt="" id="html" data-aos="flip-left" />
                    <img src={css} alt="" id="css" data-aos="flip-right" />
                    <img src={js} alt="" id="js" data-aos="flip-up" />
                    <img src={java} alt="" id="java" data-aos="flip-down" />
                    <img src={spring} alt="" id="spring" data-aos="flip-left" />
                    <img src={react} alt="" id="react" data-aos="flip-right" />
                    <img src={bootstrap} alt="" id="bs" data-aos="flip-up" />
                    <img src={figma} alt="" id="figma" data-aos="flip-down" />
                    <img src={canva} alt="" id="canva" data-aos="flip-left" />
                    <img src={ps} alt="" id="ps" data-aos="flip-right" />
                </div>
            </div>
        </div>
    )
}

export default Skills;