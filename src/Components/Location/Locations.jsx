import React from 'react'
import "./Location.css"
import { motion } from 'framer-motion';
import shoporg from "../assets/shoporg.jpg"

const Locations = () => {
  return (
    <div className="location" id='location' >
      <div className="home-container">
      <motion.div
        className="home"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="home-roof" />
        <div className="home-body" />
        <div className="home-door" />
      </motion.div>
    </div>
        <h1 className='location-title'>Shop Location</h1>
        <div className='location-content'>
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243.04093952570616!2d79.13904614835083!3d12.929879425937683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad389143913cf3%3A0x1f0669988ce06732!2s4%2C%204%2C%20Anna%20Sastri%20St%2C%20Thottapalayam%2C%20Vellore%2C%20Tamil%20Nadu%20632012!5e0!3m2!1sen!2sin!4v1721837543253!5m2!1sen!2sin" 
        width="100%" 
        height="100%" 
        style={{border:0}}
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Mens Look"
        className='map'
        >
        </iframe>
        <img src={shoporg} alt="Shop" className='shop-img'/>
        </div>
    </div>
  )
}

export default Locations