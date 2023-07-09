import React, { useEffect, useState } from 'react';
import './styles/home.css'; // Import any CSS file for styling if needed
import Header from './Header'; // Import the Header component
import Hero from './homeComponents/Hero'; // Import the Hero component
import Image from './homeComponents/Image'; // Import the Image component
import CarModels from './homeComponents/CarModels'; // Import the CarModels component

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const imageSection = document.querySelector('.image-section');

      if (scrollPosition > imageSection.offsetTop - windowHeight / 2) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Header />

      <Hero />

      <Image isScrolled={isScrolled} />

      <CarModels />

      {/* Other sections and content */}
    </div>
  );
};

export default Home;
