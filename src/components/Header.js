import React from 'react';
import { Link } from 'react-router-dom';
import carIcon from './icons/5.png'; // Import the car icon PNG
import './styles/header.css'; // Import the CSS file

const Header = () => {
  return (
    <div className="header"> {/* Add the "header" class to the root div element */}
      <div className="logo">
        <Link to="/" className="logo-link">
          <img src={carIcon} alt="Car Icon" className="car-icon" />
          CruiseAuto
        </Link>
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/browse-cars">Browse Cars</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
