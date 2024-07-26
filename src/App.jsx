import React from 'react';
import './App.css';
import About from './Components/About/About';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/NavBar/NavBar';
import Service from './Components/Servicedone/service';
import Locations from './Components/Location/Locations';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Locations/>
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
