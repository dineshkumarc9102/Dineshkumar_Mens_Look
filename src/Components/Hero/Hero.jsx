import React from 'react';
import { motion } from 'framer-motion';
import "./Hero.css";
import dp from '../assets/hero.png'; 

const Hero = () => {
  return (
    <div className="hero">
      <motion.h1 
        className='title'
        initial={{ opacity: 0, rotateX: -90 }}
        animate={{ opacity: 1, rotateX: 0 }}
        transition={{ duration: 1 }}
      >
        <span>MENS LOOK <br/></span> SALON & SPA
      </motion.h1>
      <motion.img 
        src={dp} 
        alt="hero" 
        className='photo'
        initial={{ opacity: 0, rotateY: -30 }}
        animate={{ opacity: 1, rotateY: 0 }}
        transition={{ duration: 2 }}
      />
    </div>
  )
}

export default Hero;
