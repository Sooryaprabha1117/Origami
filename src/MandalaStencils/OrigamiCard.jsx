import React from 'react';
import './OrigamiCard.css';

const OrigamiCard = ({ image, title, description }) => {
  return (
    <div className="origami-card">
      <img src={image} alt={title} className="origami-image" />
      <div className="origami-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default OrigamiCard;
