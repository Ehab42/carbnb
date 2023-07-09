import React, { useEffect, useState } from 'react';
import backgroundImage from '../images/this.jpg';
import './styles/image.css'; // Import the CSS file for styling


const Image = ({ isScrolled }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="image-section">
      <img src={backgroundImage} alt="Background" className="background-image" />
      {showButton && (
        <div className={`scroll-text ${isScrolled ? 'fade-in' : ''}`}>
          <h2 className="scroll-title">Rent with Confidence</h2>
          <p className="scroll-description">
            Experience the joy of driving without the hassle of ownership. Rent a wide range of high-quality vehicles from trusted car owners in your area. Discover the perfect ride for your every adventure.
          </p>
          <button className="start-browsing-button">Start Browsing</button>
        </div>
      )}
    </div>
  );
};

export default Image;
