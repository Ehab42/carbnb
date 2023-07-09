import React from 'react';
import './styles/carModels.css';
import Kia from '../images/Cars/kia.jpg';
import Toyota from '../images/Cars/toyota.jpg';
import Hyundai from '../images/Cars/hyundai.jpg';

const CarModels = () => {
  const carModels = [
    {
      id: 1,
      title: 'kia',
      image: Kia,
    },

    {
      id: 2,
      title: 'Toyota',
      image: Toyota,
    },

    {
      id: 3,
      title: 'Hyundai',
      image: Hyundai,
    },

  ];

  return (
    <div className="car-models-section">
      <h2 className="section-title">Browse Cars by Model</h2>
      <div className="card-grid">
        {carModels.map((carModel) => (
          <div className="card" key={carModel.id}>
            <div className="card-image">
              <img src={carModel.image} alt={carModel.title} />
            </div>
            <div className="card-overlay">
              <h3 className="card-title">{carModel.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarModels;
