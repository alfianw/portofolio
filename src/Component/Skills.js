import React from "react";
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

const Skills = ()=>{
    return(
        <div className="skill" id="3">
            <div className="card-skills">
                <h1>Skills</h1>
                <div className="warp-skills">
                    <img src={html} alt="" id="html"/>
                    <img src={css} alt="" id="css"/>
                    <img src={js} alt="" id="js"/>
                    <img src={java} alt="" id="java"/>
                    <img src={spring} alt="" id="spring"/>
                    <img src={react} alt="" id="react"/>
                    <img src={bootstrap} alt="" id="bs"/>
                    <img src={figma} alt="" id="figma"/>
                    <img src={canva} alt="" id="canva"/>
                    <img src={ps} alt="" id="ps"/>
                </div>
            </div>
        </div>
    )
}

export default Skills;