import React, { useEffect } from "react";
import '../style/Portofolio.css'
import nft from '../Asset/nft.png'
import bandar from '../Asset/bandarplastik.png'
import bayduls from '../Asset/bayduls.png'
import book from '../Asset/book.png'
import comingsoon from '../Asset/comingsoon.png'
import movieKuy from '../Asset/movieKuy.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import CardPorto from "./CardPorto.js";
import space from "../Asset/space.png"
import todo from "../Asset/Todo-App.png"
import urlShortening from "../Asset/url-shortening.png"
import roomHome from "../Asset/room-homepage.png"
import emailSubscription from "../Asset/emailSubscriptionPage.png"
import ecommerce from "../Asset/ecommerce-product-page-main.png"

const Portofolio = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, []);

    const card =[
        {link: "https://alfianw.github.io/NFTThermos/", img: nft, h2:"NFT Thermos", p:"create the main page of the NFT Thermos website using React JS."},
        {link: "https://alfianw.github.io/BayDuls/", img: bayduls, h2:"BayDuls", p:"create the main page of the BayDuls website using Bootstrap (this website is not responsive yet)."},
        {link: "https://alfianw.github.io/MovieKuy/", img: movieKuy, h2:"Movie Kuy!", p:"Create and design a Movie Kuy! by using ReactJS by consuming the API from The Movie Data Base."},
        {link: "https://alfianw.github.io/SpaceTourism/", img: space, h2:"Space Tourism", p:"Create and design a Space Tourism by using ReactJS (this website is not responsive yet)."},
        {link: "https://alfianw.github.io/Todo-App/all", img: todo, h2:"Todo App", p:"Create and design a Todo App by using ReactJS"},
        {link: "https://alfianw.github.io/url-shortening/", img: urlShortening, h2:"Url Shortening", p:"Create and design a Url Shortening by using ReactJS"},
        {link: "https://alfianw.github.io/room-homepage/", img: roomHome, h2:"Room Home Page", p:"Create and design a Room Home Page by using ReactJS"},
        {link: "https://alfianw.github.io/emailSubscriptionPage/", img: emailSubscription, h2:"Email Subscription Page", p:"Create and design a Email Subscription Page by using HTML, CSS & JavaScript"},
        {link: "https://alfianw.github.io/ecommerce-product-page-main/", img: ecommerce, h2:"Ecommerce Product Page", p:"Create and design a Ecommerce Product Page by using HTML, CSS & JavaScript"},
        {link: "https://alfianw.github.io/bandarplastikindonesia.github.io/", img: bandar, h2:"BANDAR PLASTIK INDONESIA", p:"Create and design a company profile website for the company Bandar Plastik Indonesia"},
        {link: "https://alfianw.github.io/bookshelf/", img: book, h2:"Bookshelf", p:"Create and design a bookshelf website to store books you want to read or have already read."},
    ]

    return (
        <div className="portofolio" id="4">
            <div className="des">
                <h1>Portofolio</h1>
            </div>
            <div className="warp-porto">
                <CardPorto
                card={card}
                />
            </div>
        </div>
    )
}

export default Portofolio;