import React, { useEffect } from "react";
import '../style/Contact.css'
import email from '../Asset/email.png'
import phone from '../Asset/phone.png'
import locatiion from '../Asset/location.png'
import contact from '../Asset/contact.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, []);
    return (
        <div className="contact">
            <div className="dess">
                <h1>Contact</h1>
            </div>
            <div className="card-contact" id="5">
                <div className="warp-contact">
                    <h1 data-aos="zoom-in-down">Get in Touch</h1>
                    <div className="email" data-aos="fade-right">
                        <div className="icon"><img src={email} alt="" id="email" /></div>
                        <article>
                            <h2>Email</h2>
                            <h2>alfianmuhammad34@gmail.com</h2>
                        </article>
                    </div>
                    <div className="phone" data-aos="fade-right">
                        <div className="icon"><img src={phone} alt="" id="phone" /></div>
                        <article>
                            <h2>Phone</h2>
                            <h2>085773113530</h2>
                        </article>
                    </div>
                    <div className="location" data-aos="fade-right">
                        <div className="icon"><img src={locatiion} alt="" id="location" /></div>
                        <article>
                            <h2>location</h2>
                            <h2>Makasar, East Jakarta City, Jakarta 13650, Indonesia</h2>
                        </article>
                    </div>
                </div>
                <img src={contact} alt="" id="contact" data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500" />
            </div>
        </div>
    );
}

export default Contact