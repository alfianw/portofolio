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
import mysql from '../Asset/mysql.png'
import c from '../Asset/C.png'
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
                    <img src={html} alt="" id="kotak" data-aos="flip-left" />
                    <img src={css} alt="" id="kotak" data-aos="flip-right" />
                    <img src={js} alt="" id="kotak" data-aos="flip-up" />
                    <img src={java} alt="" id="pS" data-aos="flip-down" />
                    <img src={spring} alt="" id="pS" data-aos="flip-left" />
                    <img src={react} alt="" id="kotak" data-aos="flip-right" />
                    <img src={bootstrap} alt="" id="kotak" data-aos="flip-up" />
                    <img src={figma} alt="" id="pS" data-aos="flip-down" />
                    <img src={mysql} alt="" id="pS" data-aos="flip-left" />
                    <img src={c} alt="" id="kotak" data-aos="flip-right" />
                </div>
            </div>
        </div>
    )
}

export default Skills;