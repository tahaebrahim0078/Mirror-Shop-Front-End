import React from "react";
import "./Hero.css";
import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'
import hero_image from '../assets/ABIBAS2 copy.png'
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVS ONLY</h2>
        <div>
           <div className="hand-icon">
            <p>NEW</p>
            <img src={hand_icon} alt="" />
           </div>
           <p>collection</p>
           <p>for everyone</p>
        </div>
        <div className="hero-latest-button">
            <div>Latest collection</div>
            <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
