import React from 'react';
import "./Contact.css";
import { motion } from "framer-motion";
import kotti from "../assets/kotti.jpg";
import insta from "../assets/insta.svg";
import fb from "../assets/fb.svg";
import ph from "../assets/ph.svg";

const Contact = () => {
  return (
    <div id='contact'>
      <motion.div
        className="call-symbol"
        initial={{ rotate: 0 }}
        animate={{ rotate: [0, 20, 0] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.037 11.037 0 004.16 1.02 1 1 0 011 1v3.5a1 1 0 01-1 1C10.95 21 3 13.05 3 3.5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.45.35 2.83 1.02 4.16a1 1 0 01-.27 1.11l-2.2 2.2z" fill="#000"/>
        </svg>
      </motion.div>
      <h1 className='contact-title'>Contact</h1>
      <div className="contact-container">
        <div className="top">
          <img src={kotti} alt="kotti" />
        </div>
        <div className="bottom">
          <ul>
            <li><a href="tel:+91 9626552273"><img src={ph} alt="Phone" className='ph'/></a></li>
            <li><a href="https://www.instagram.com/vijaykotti?igsh=MW9rb2w4bnFpcHNqZQ=="><img src={insta} alt="Instagram" className='insta' /></a></li>
            <li><a href="https://www.facebook.com/kotti.vijay.5"><img src={fb} alt="Facebook" className='fb'/></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;


