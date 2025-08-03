import React, { useState, useEffect } from "react";
import astrologerImg from "../assets/astrologer2.jpg";
import astroBg from "../assets/astro-bg.jpg";

function Home({ onBookClick }) {
    return (
      <section id="hero" 
      className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden" 
      style={{backgroundImage: `url(${astroBg})`, backgroundSize: 'auto', backgroundPosition: 'center', backgroundBlendMode:'overlay' }}
      >
        <div className="absolute inset-0 bg-transparent bg-opacity-200 z-10" />
        <div className="relative z-20 flex flex-row items-center justify-between w-full max-w-6xl mx-auto px-4">
          {/* Left: Info */}
          <div className="flex-1 text-left text-white max-w-xl">
            {/* Trust Badge */}
            <p className="text-white text-xs mb-4 font-medium">Verified & Trusted | Expert Astrologers</p>
            
            {/* Main Headline */}
            <h3 className=" md:text-4xl font-extrabold mb-6 text-white drop-shadow-lg">
              Transform Your Life With The Best Astrologer In India
            </h3>
            
            {/* Supporting Description */}
            <p className="text-base md:text-lg text-white mb-8 leading-relaxed">
              Unlock the secrets to a harmonious and prosperous life with expert astrological guidance tailored just for you.
            </p>
            
          
            
            {/* Contact Info */}
            <div className="text-white text-xs">
              <p><span className="font-semibold">Phone:</span> <a href="tel:+919876543210" className="hover:underline text-yellow-200">+91-9876543210</a></p>
              <p><span className="font-semibold">Email:</span> <a href="mailto:contact@astrologer.com" className="hover:underline text-yellow-200">contact@astrologer.com</a></p>
            </div>
          </div>
          
          {/* Right: Astrologer Photo */}
          <div className="flex-1 flex justify-end items-end">
            <img
              src={astrologerImg}
              alt="Astrologer Shastri Ji"
              className="object-cover bg-black backdrop-blur-sm bg-opacity-30 animate-spin-ultra-slow w-96 h-96 object-top shadow-2xl border-4 rounded-full"
              style={{marginRight: '-2rem'}}
            />
          </div>
        </div>
      </section>
    );
  }

export default Home;