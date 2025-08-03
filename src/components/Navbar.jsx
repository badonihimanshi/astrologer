import React, { useState, useEffect } from 'react';
import logo from '../assets/logo-placeholder.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={
      `py-3 shadow-lg fixed w-full top-0 left-0 z-30 bg-white transition-all rounded-b-1xl` 
      // (scrolled
      //   ? "bg-white  bg-opacity-100 text-gray-800 shadow-2xl"
      //   : "bg-transparent  text-gray-800 ")
    }>
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <div className="flex items-center px-0">
            <img src={logo} alt="Logo" className="h-16 w-auto rounded-full bg-white bg-opacity-80 p-1 shadow" />
        </div>
        <div className="flex space-x-7 md:space-x-10 text-xs md:text-sm ml-56">        

          <a href="#hero" className="hover:text-amber-600 transition">Home</a>
          <a href="#about" className="hover:text-amber-600 transition">About</a>
          <a href="#services" className="hover:text-amber-600 transition">Services</a>
          <a href="#learn" className="hover:text-amber-600 transition">Learn Astrology</a>
          <a href="#faq" className="hover:text-amber-600 transition">FAQs</a>
          <a href="#contact" className="hover:text-amber-600 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;