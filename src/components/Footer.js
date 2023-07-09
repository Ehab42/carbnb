import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo/logo.png'; // Replace with your logo image path
import './styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="logo-section">
            <img src={logo} alt="Logo" className="footer-logo" />
          </div>
          <div className="links-section">
            <div className="section">
              <h3 className="section-title1">Experience</h3>
              <ul className="section-links1">
                <li>
                  <Link to="/browse-cars">SUV</Link>
                </li>
                <li>
                  <Link to="/browse-cars">Four Wheel</Link>
                </li>
                <li>
                  <Link to="/browse-cars">Sedan</Link>
                </li>
                {/* Add more links for car types */}
              </ul>
            </div>
            <div className="section">
              <h3 className="section-title1">Other</h3>
              <ul className="section-links1">
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
                <li>
                  <Link to="/terms-of-service">Terms of Service</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
