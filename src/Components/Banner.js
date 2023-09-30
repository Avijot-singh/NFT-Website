import React from "react";
import bcImg from '../assets/2823.jpg';
import "../style/Banner.css";

const Banner = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero-container">
        <div className="hero-background-image"></div>
        <div className="hero-content-wrapper">
          <div className="hero-copy-container">
            <div className="hero-title">
              Discover, collect, and sell extraordinary NFTs
            </div>
          </div>
          <div className="hero-card-container">
            <img
              className="hero-card-image"
              src={bcImg}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
