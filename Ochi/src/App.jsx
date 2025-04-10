import './index.css';
import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Marquee from './components/Marquee';
import About from './components/About';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import Rating from './components/Rating';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const App = () => {
  const locomotiveScroll  = new LocomotiveScroll();

  return (
    <div data-scroll-container className="w-full font-[ochi5] text-[#212121]">
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Rating />
      <Footer />
    </div>
  );
};

export default App;
