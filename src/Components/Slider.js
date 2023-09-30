import React, { useState, useEffect } from "react";
import "../style/slider.css";

const Slider = () => {
  // Declare the images array locally in the Slider component
  const images = ["../assets/NFT_Jpegs/000.png", "../assets/NFT_Jpegs/00.png"]; // Replace with your image URLs

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  };

  const goToPrevSlide = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
  };

  useEffect(() => {
    const timer = setInterval(goToNextSlide, 3000); // Change image every 3 seconds

    return () => {
      clearInterval(timer);
    };
  }, [currentIndex]);

  return (
    <div className="slider-container">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="slide" key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button className="nav-button prev-button" onClick={goToPrevSlide}>
        &lt;
      </button>
      <button className="nav-button next-button" onClick={goToNextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default Slider;
