import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo/logo.png';
import './styles/header.css';


const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Logo" className="car-icon" />
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
