import React, { useEffect } from "react";
import '../style/AboutMe.css';
import foto from '../Asset/Foto.png';
import ig from '../Asset/ig.png';
import linkedin from '../Asset/linkedin.png'
import github from '../Asset/github.png'
import AOS from 'aos';
import 'aos/dist/aos.css';



const AboutMe = ()=>{
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, []);
    return(
        <div className="AboutMe" id="2">
        <div className="card">
            <img src={foto} alt="" id="foto" data-aos="fade-right"/>
            <div className="warp" data-aos="fade-right">
                <h1>About <span>Me</span></h1>
                <p>I am a creative person, easy to learn new things and easy to get along with. I have expertise in creating Restful API, processing databases and developing web applications. I am a person who can do well as part of a team and on my own. I am also a hard worker, and eager to learn.</p>
                <div className="btn-sosmed">
                    <a href="https://drive.google.com/drive/folders/1DxfWtnf2i7X7Lq3l0WDBqW__oosSgRvB" id="btn-cv" target="_blank">Download CV</a>
                    <a href="https://www.instagram.com/m_alfianw/?igshid=YmMyMTA2M2Y%3D"  target="_blank"><img src={ig} alt="" id="btn-ig"/></a>
                    <a href="https://www.linkedin.com/in/muhamad-alfian-widjaya-487174222/"  target="_blank"><img src={linkedin} alt="" id="btn-ld"/></a>
                    <a href="https://github.com/alfianw"  target="_blank"><img src={github} alt="" id="btn-gh"/></a>
                </div>
            </div>
        </div>
        </div>

    )
}

export default AboutMe;