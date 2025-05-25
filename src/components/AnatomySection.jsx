import React from 'react';
import { FiZoomIn } from 'react-icons/fi';

// Import CSS here
import '../styles/AnatomySection.css';

const AnatomySection = () => {
  return (
    <div className="anatomy-container">
      <div className="anatomy-image-wrapper">
        <img 
          src="/image.png" 
          alt="Human Anatomy" 
          className="anatomy-image"
        />

        {/* Zoom button */}
        <button className="zoom-button">
          <FiZoomIn className="zoom-icon" />
        </button>

        {/* Heart Indicator */}
        <div className="indicator heart-indicator">
          <span className="emoji">❤️</span>
          <span className="indicator-text">Healthy Heart</span>
        </div>

        {/* Leg Indicator */}
        <div className="indicator leg-indicator">
          <span className="emoji">🦵</span>
          <span className="indicator-text">Healthy Leg</span>
        </div>

        {/* Control slider */}
        <div className="slider-container">
          <input 
            type="range" 
            min="0" 
            max="100" 
            defaultValue="50" 
            className="slider"
          />
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;
