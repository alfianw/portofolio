import React from "react";
import '../style/componentStyle/about.css'
import supplay1 from '../assets/supplay1.png';
import supplay2 from '../assets/supplay2.png';

const About = () => {
    return (
        <section id="about" className="about">

            {/* PINNED SECTION */}
            <div className="about-content">
                <div className="about-inner">
                    <div className="about-image about-image-left">
                        <img src={supplay1} alt="Supply 1" />
                    </div>

                    <div className="about-content-text">
                        <h2 className="about-title">
                            ABOUT ME
                        </h2>

                        <p>
I am a Full Stack Developer with experience in building scalable web applications, backend services, and microservices-based systems. Skilled in backend development, RESTful API integration, cloud migration support, system deployment, and creating responsive user-friendly interfaces. Passionate about delivering reliable, efficient, and maintainable solutions while continuously learning and adapting to new technologies.
                        </p>
                    </div>

                    <div className="about-image about-image-right">
                        <img src={supplay2} alt="Supply 2" />
                    </div>
                </div>
            </div>

            <div className="about-buffer"></div>

            <div className="plane-slide-wrapper">
                <div className="plane-slide"></div>
            </div>

        </section>
    )
}

export default About