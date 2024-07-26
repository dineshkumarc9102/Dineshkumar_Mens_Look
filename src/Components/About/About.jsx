import React from 'react';
import { motion } from 'framer-motion';
import "./About.css";

const About = () => {
  return (
    <>
      <div className="box" id="about">
        <div className="scissors-container">
          <motion.div
            className="scissors"
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, -20, 0] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="scissor-blade blade-left" />
            <div className="scissor-blade blade-right" />
            <div className="scissor-handle handle-left" />
            <div className="scissor-handle handle-right" />
            <div className="scissor-ring ring-left" />
            <div className="scissor-ring ring-right" />
          </motion.div>
        </div>
        <motion.h1 
          className='about-title' 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          About
        </motion.h1>
        <div className="about">
          <motion.p 
            className='content'
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 50 }}
          >
            Welcome to Mens Look where beauty meets excellence. Owned and operated by Kotteswarn S., who holds a BA degree, our salon is dedicated to providing top-notch beauty services tailored to meet your individual needs.
          </motion.p>
          <motion.p 
            className='content'
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            <strong>Meet  S.Kotteswarn </strong>
            <br />
            Kotteswarn S. is not just the owner but the heart and soul of Mens Look. With a BA degree and years of experience in the beauty industry, Kotteswarn’s passion for beauty and dedication to excellence shine through in every aspect of the salon.
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default About;
