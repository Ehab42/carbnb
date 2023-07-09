import React from 'react';
import './styles/carTypes.css';
import sedanImage from '../images/Cars/sedan.jpg';
import suvImage from '../images/Cars/suv.jpg';
import fourWheelImage from '../images/Cars/4wheel.jpg';

const CarTypes = () => {
  const carTypes = [
    {
      id: 1,
      title: 'Sedan',
      image: sedanImage,
    },
    {
      id: 2,
      title: 'SUV',
      image: suvImage,
    },
    {
      id: 3,
      title: '4-Wheel',
      image: fourWheelImage,
    },
  ];

  return (
    <div className="car-models-section">
      <h2 className="section-title">Browse Cars by Type</h2>
      <div className="card-grid">
        {carTypes.map((carType) => (
          <div className="card" key={carType.id}>
            <div className="card-image">
              <img src={carType.image} alt={carType.title} />
            </div>
            <div className="card-overlay">
              <h3 className="card-title">{carType.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarTypes;
