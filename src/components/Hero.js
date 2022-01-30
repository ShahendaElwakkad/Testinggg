import React from "react";
import "./Hero.css";
import hero from "../images/HeroImg.jpg";
import Success from "./Success";

const Hero = () => {
  return (
    <div class="hero-image">
      <img className="hero-image" src={hero}></img>
      <div class="hero-text">
        <h1 className="main-text">
          Deliver What You Love, On<br></br> Time
        </h1>
        <p className="main-paragraph">
          Deliver your products to any place in Egypt with a one-stop, <br></br>
          full-service next-day delivery and logistics solution.
        </p>
        <button className="main-button">Ship with Bosta</button>
      </div>
    </div>
  );
};

export default Hero;
