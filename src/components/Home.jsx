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
        <div className="relative z-20 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6 py-20">
          {/* Left: Content */}
          <div className="flex-1 text-left max-w-2xl mb-12 lg:mb-0 lg:pr-12">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium mb-6 animate-fade-in">
              <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Verified & Trusted Expert
            </div>
            
            {/* Main Headline */}
            <h1 className="text-2xl lg:text-4xl font-bold mb-6 text-white leading-tight animate-slide-up drop-shadow-lg">
              Transform Your Life With Expert Guidance
              {/* <span className="text-accent font-serif">Expert Guidance</span> */}
            </h1>
            
            {/* Description */}
            <p className="text-sm lg:text-base text-white mb-8 leading-relaxed animate-slide-up drop-shadow-md" style={{animationDelay: '0.2s'}}>
              Unlock the secrets to a harmonious and prosperous life with personalized astrological guidance from India's most trusted experts.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-slide-up" style={{animationDelay: '0.4s'}}>
              <button className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 text-sm">
                Learn More
              </button>
            </div>
            
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 text-xs text-white animate-slide-up" style={{animationDelay: '0.6s'}}>
              <div className="flex items-center">
                <svg className="w-3 h-3 mr-2 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+919876543210" className="hover:text-accent transition-colors">+91-9876543210</a>
              </div>
              <div className="flex items-center">
                <svg className="w-3 h-3 mr-2 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contact@astrologer.com" className="hover:text-accent transition-colors">contact@astrologer.com</a>
              </div>
            </div>
          </div>
          
          {/* Right: Astrologer Image - Keep original spinning */}
          <div className="flex-1 flex justify-end items-end">
            <img
              src={astrologerImg}
              alt="Expert Astrologer"
              className="object-cover bg-black backdrop-blur-sm bg-opacity-30 animate-spin-ultra-slow w-96 h-96 object-top shadow-2xl border-4 rounded-full"
              style={{marginRight: '-2rem'}}
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>
    );
  }

export default Home;