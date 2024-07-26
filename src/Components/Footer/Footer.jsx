import React from 'react';
import './Footer.css';
import { Link as ScrollLink } from 'react-scroll';
import top from '../assets/top.svg';

const Footer = () => {
  const scrollToTop = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    })
  };

  return (
    <footer className='footer'>
      <div className='footer-bottom'>
        <p>&copy; {new Date().getFullYear()} <a href='/'><b>Mens Look</b></a>. All Rights Reserved.</p>
        <ScrollLink 
          to="navbar" 
          smooth={true} 
          duration={500} 
          onClick={scrollToTop}
        >
          <button className='scroll-to-top'>
            <img src={top} alt="top" />
          </button>
        </ScrollLink>
      </div>
    </footer>
  );
}

export default Footer;
