import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './NavBar.css';
import logo from '/logo.png';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav>
      <div className="container">
        <div className="left">
          <img src={logo} alt='logo'/>
          <ScrollLink to="hero" smooth={true} duration={500} className="brand-link">
            MENS LOOK
          </ScrollLink>
        </div>
        <div className="right">
          <div 
            className={`menu-icon ${menuActive ? 'menu-icon-active' : ''}`} 
            onClick={toggleMenu}
          >
            {menuActive ? '✖' : '☰'}
          </div>
          <ul className={`menu ${menuActive ? 'menu-active' : ''}`}>
            <li><ScrollLink to="about" smooth={true} duration={500} onClick={toggleMenu}>About</ScrollLink></li>
            <li><ScrollLink to="service" smooth={true} duration={500} onClick={toggleMenu}>Service</ScrollLink></li>
            <li><ScrollLink to="location" smooth={true} duration={500} onClick={toggleMenu}>Location</ScrollLink></li>
            <li><ScrollLink to="contact" smooth={true} duration={500} onClick={toggleMenu}>Contact</ScrollLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
