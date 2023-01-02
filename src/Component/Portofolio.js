import React from "react";
import '../style/Portofolio.css'
import nft from '../Asset/nft.png'
import bandar from '../Asset/bandarplastik.png'
import bayduls from '../Asset/bayduls.png'
import book from '../Asset/book.png'
import comingsoon from '../Asset/comingsoon.png'

const Portofolio = ()=>{
    return(
        <div className="portofolio" id="4">
            <div className="des">
                <h1>Portofolio</h1>
            </div>
            <div className="warp-porto">
                <a href="https://alfianw.github.io/bandarplastikindonesia.github.io/" target="_blank"><div className="card-porto">
                    <img src={bandar} alt="" id="portoImg"/>
                    <h2>BANDAR PLASTIK INDONESIA</h2>
                    <p>Create and design a company profile website for the company Bandar Plastik Indonesia</p>
                </div></a>
                <a href="https://alfianw.github.io/NFTThermos/" target="_blank"><div className="card-porto">
                    <img src={nft} alt="" id="portoImg"/>
                    <h2>NFT Thermos</h2>
                    <p>create the main page of the NFT Thermos website using React JS.</p>
                </div></a>
                <a href="https://alfianw.github.io/BayDuls/" target="_blank"><div className="card-porto">
                    <img src={bayduls} alt="" id="portoImg"/>
                    <h2>BayDuls</h2>
                    <p>create the main page of the BayDuls website using Bootstrap. (this website is not responsive yet)</p>
                </div></a>
                <a href="https://alfianw.github.io/bookshelf/" target="_blank"><div className="card-porto">
                    <img src={book} alt="" id="portoImg"/>
                    <h2>Bookshelf</h2>
                    <p>Create and design a bookshelf website to store books you want to read or have already read.</p>
                </div></a>
                <a href="blank" target="_blank"><div className="card-porto">
                    <img src={comingsoon} alt="" id="portoImg"/>
                    <h2>Comming soon</h2>
                    <p>Available soon.</p>
                </div></a>
                <a href="blank" target="_blank"><div className="card-porto">
                    <img src={comingsoon} alt="" id="portoImg"/>
                    <h2>Comming soon</h2>
                    <p>Available soon.</p>
                </div></a>
            </div>
        </div>
    )
}

export default Portofolio;