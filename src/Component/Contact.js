import React from "react";
import '../style/Contact.css'
import email from '../Asset/email.png'
import phone from '../Asset/phone.png'
import locatiion from '../Asset/location.png'
import contact from '../Asset/contact.png'

const Contact = () => {
    return (
        <div className="contact">
            <div className="dess">
                <h1>Contact</h1>
            </div>
            <div className="card-contact" id="5">
                <div className="warp-contact">
                    <h1>Get in Touch</h1>
                    <div className="email">
                    <div className="icon"><img src={email} alt="" id="email"/></div>
                    <article>
                        <h2>Email</h2>
                        <h2>alfianmuhammad34@gmail.com</h2>
                    </article>
                    </div>
                    <div className="phone">
                    <div className="icon"><img src={phone} alt="" id="phone"/></div>
                    <article>
                        <h2>Phone</h2>
                        <h2>085773113530</h2>
                    </article>
                    </div>
                    <div className="location">
                    <div className="icon"><img src={locatiion} alt="" id="location"/></div>
                    <article>
                        <h2>location</h2>
                        <h2>Makasar, East Jakarta City, Jakarta 13650, Indonesia</h2>
                    </article>
                    </div>
                </div>
                <img src={contact} alt="" id="contact"/>
            </div>
        </div>
    );
}

export default Contact