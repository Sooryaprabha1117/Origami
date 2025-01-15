import React, { useState } from 'react';
import './Images.css';
import image1 from '../assets/image/image1.png';
import image2  from '../assets/image/image2.jpg';
import image3  from '../assets/image/image3.jpg';
import image4  from "../assets/image/image4.jpg";
import image5 from "../assets/image/image5.jpg";
import image6  from "../assets/image/image6.avif";
import image7 from "../assets/image/image7.jpg";
import image8  from "../assets/image/image8.jpg";

import myimg1 from "../assets/origami/org1.jpg";
import myimg2 from "../assets/origami/org2.jpg";
import myimg3 from "../assets/origami/org3.jpg";
import myimg4 from "../assets/origami/org4.jpg";
import myimg5 from "../assets/origami/org5.jpg";
import myimg6 from "../assets/origami/org6.jpg";
import myimg7 from "../assets/origami/org7.jpg";
import myimg8 from "../assets/origami/org8.jpg";
import myimg9 from "../assets/origami/org9.jpg";

const imageList = [
 
  { src: image1, alt: 'Origami Design', description: 'A Bird' },
  { src: image2, alt: 'Origami Piece', description: 'A Crab' },
  { src: image3, alt: 'Origami Piece', description: 'A Penguin' },
  { src: image4, alt: 'Origami Piece', description: 'A pigeon' },
  { src: image5, alt: 'Origami Piece', description: 'A Butterfly' },
  { src: image6, alt: 'Origami Piece', description: 'A Fish ' },
  { src: image7, alt: 'Origami Piece', description: 'A Koala' },
  { src: image8, alt: 'Origami Piece', description: 'A Box' },
];

const extraImageList = [
  { src: myimg1, alt: 'Extra Image 1' },
  { src: myimg2, alt: 'Extra Image 2' },
  { src: myimg3, alt: 'Extra Image 3' },
  { src: myimg4, alt: 'Extra Image 4' },
  { src: myimg5, alt: 'Extra Image 5' },
  { src: myimg6, alt: 'Extra Image 6' },
  { src: myimg7, alt: 'Extra Image 7' },
  { src: myimg8, alt: 'Extra Image 8' },
  { src: myimg9, alt: 'Extra Image 9' },
];

const Images = () => {
  const [showCard, setShowCard] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % extraImageList.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? extraImageList.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="App">
      <h1>Image Gallery</h1>
      <div className="origami-grid">
        {imageList.map((image, index) => (
          <div className="origami-card" key={index}>
            <img src={image.src} alt={image.alt} className="origami-image" />
            <div className="origami-description">{image.description}</div>
          </div>
        ))}
      </div>

      <button className="explore-button" onClick={() => setShowCard(true)}>
        Explore My Work
      </button>

      {showCard && (
        <div className="popup-card">
          <button className="close-button" onClick={() => setShowCard(false)}>X</button>
          <div className="image-slider">
            <button className="nav-button prev" onClick={handlePrev}> &lt; </button>
            <img
              src={extraImageList[currentIndex].src}
              alt={extraImageList[currentIndex].alt}
              className="slider-image"
            />
            <button className="nav-button next" onClick={handleNext}> &gt;</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Images;
