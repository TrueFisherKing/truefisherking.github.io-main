import { useState } from "react"
import "./Card.css"

import tftLogo from "/assets/images/Town Fair Logo_Red Back.png"
import starImage from "/assets/images/star.png"
import googleLogo from "/assets/images/google_logo-667x400.png"

import qrLogoBrandfordCT from "/assets/images/qr-codes/branford-ct.png"

export default function Card() {
    return (
        <>
            <div className="card">
                <div className="images">
                    <img src={tftLogo} alt="tft-logo" width="70px" height="70px" />
                    <img src={qrLogoBrandfordCT} alt="QR Code" />
                </div>
                <div className="text">
                    <div className="top">
                        <p>Guaranteed Lowest Price</p>
                        <p>Town Fair Tire Centers <br />
                            of Connecticut LLC <br />Branford, CT</p>
                        <div className="stars">
                            <img src={starImage} alt="star" />
                            <img src={starImage} alt="star" />
                            <img src={starImage} alt="star" />
                            <img src={starImage} alt="star" />
                            <img src={starImage} alt="star" />
                        </div>
                    </div>
                    <p className="mid">Fisher</p>
                    <div className="bottom">
                        <p>Your Salesman</p>
                    </div>
                </div>
                <footer>
                    <p>Satisfied with your service? Let us know on</p>
                    <div className="footer-image-container">
                        <img src={googleLogo} alt="Google Logo" width="667" height="400" />
                    </div>
                </footer>
            </div>
        </>
    )
}