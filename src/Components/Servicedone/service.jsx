import React from 'react';
import "./service.css";
import { motion } from 'framer-motion';
import haircut from "../assets/haircut.png";
import beardcut from "../assets/beardcut.png";
import facial from "../assets/Facial.png";
import makeup from "../assets/makeup.png";
import massage from "../assets/massage.png";
import coloring from "../assets/coloring.png"

const Service = () => {
  return (
    <div className="services" id='service'>
        <div className="comb-container">
        <motion.div
           className="comb"
           initial={{ rotate: 0 }}
           animate={{ rotate: [0, -20, 0] }}
           transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        >
        <div className="comb-handle" />
        <div className="comb-tooth-container">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="comb-tooth" />
          ))}
        </div>
        </motion.div>

        </div>
        <h2 className="services-title">Our Services</h2>
        <div className="services-container">
            <div className="service">
                <img src={haircut} alt="Hair cut" className="service-image" />
                <h3 className="service-title">Haircut</h3>
                <p className="service-description">Get a fresh look with our professional haircut services. Our experts provide precision cuts tailored to your style preferences. Enjoy a relaxing experience that leaves you looking sharp and stylish.</p>
            </div>
            <div className="service">
                <img src={beardcut} alt="Shaving and Beard Grooming" className="service-image" />
                <h3 className="service-title">Shaving and Beard Grooming</h3>
                <p className="service-description">Experience a clean, smooth shave with our professional services. Keep your beard looking its best with comprehensive grooming, including trimming, shaping, and styling. Enjoy a relaxing session that leaves you looking sharp and well-groomed.</p>
            </div>
            <div className="service">
                <img src={facial} alt="Facial" className="service-image" />
                <h3 className="service-title">Facial</h3>
                <p className="service-description">Rejuvenate your skin with our professional facial treatments. Our experts use high-quality products to cleanse, exfoliate, and hydrate your skin. Enjoy a relaxing experience that leaves your complexion glowing and refreshed.</p>
            </div>
            <div className="service">
                <img src={massage} alt="Head & Face Massage" className="service-image" />
                <h3 className="service-title">Head & Face Massage</h3>
                <p className="service-description">Relieve tension and stress with our soothing head and face massage. Our skilled therapists use gentle techniques to promote relaxation and improve circulation. Experience a calming session that revitalizes your mind and body.</p>
            </div>
            <div className="service">
                <img src={makeup} alt="Makeup" className="service-image" />
                <h3 className="service-title">Makeup</h3>
                <p className="service-description">Look stunning for any occasion with our professional function makeup services. Our makeup artists use premium products to enhance your natural beauty and create a flawless look. Enjoy a personalized session that leaves you feeling confident and glamorous.</p>
            </div>
            <div className="service">
                <img src={coloring} alt="Hair Coloring" className="service-image" />
                <h3 className="service-title">Hair Coloring</h3>
                <p className="service-description">Enhance your style with our professional hair coloring services. Our experts use high-quality dyes to achieve vibrant and long-lasting color. Enjoy a personalized experience that transforms your look and boosts your confidence.</p>
            </div>
        </div>
    </div>
  );
};

export default Service;
