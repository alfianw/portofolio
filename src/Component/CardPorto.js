import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const CardPorto = ({ card }) => {


    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, []);

    return (
        <>
            {card.map((card, index) => (
                <a href={card.link} target="_blank" data-aos="fade-up" id="linkCardP"
                    data-aos-duration="3000" key={index}>
                    <div className="card-porto">
                        <img src={card.img} alt="" id="portoImg" />
                    </div>
                    <div className="articleCard">
                        <div className="warpP">
                            <p>{card.p}</p>
                        </div>
                        <h2>{card.h2}</h2>
                    </div>
                </a>
            ))}
        </>

    )
}

export default CardPorto