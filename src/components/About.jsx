import React, { useEffect, useRef } from 'react'
import astro from "../assets/astrologer.png";

function About({ onBookClick }) {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    if (textRef.current) observer.observe(textRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id='about' className="py-20 bg-primary">
      <div className="max-w-6xl mx-auto px-6 ">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-700 mb-4 font-serif">
            Meet Your Guide
          </h2>
          <p className="text-md text-Tertiary max-w-2xl mx-auto">
            Discover the wisdom and expertise that has transformed thousands of lives
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div ref={imageRef} className="relative opacity-0 translate-y-10 transition-all duration-1000">
            <div className="flex justify-center">
              <img
                src={astro}
                alt='Expert Astrologer Rekha Bhatt'
                className='w-96 h-96 object-cover rounded-2xl shadow-lg'
              />
            </div>
          </div>

          {/* Content Section */}
          <div ref={textRef} className="opacity-0 translate-y-10 transition-all duration-1000" style={{animationDelay: '0.2s'}}>
            <div className="space-y-8">
              {/* Name */}
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 font-serif">
                  Astrologer Rekha Bhatt
                </h3>
                <p className="text-lg text-accent font-medium">Vedic Astrology Expert</p>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  India's Best Astrologer guiding lives through the power of the stars. With decades of trusted experience 
                  and thousands of satisfied clients across the globe, I offer accurate, personalized astrology readings 
                  rooted in ancient Vedic knowledge.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Specializing in kundli analysis, career and marriage predictions, gemstone recommendations,
                  and remedies for planetary doshas, my goal is to bring clarity and confidence into your life.
                </p>
              </div>

              {/* Simple Stats */}
              {/* <div className="grid grid-cols-3 gap-8 py-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">5000+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">99%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div> */}

              {/* CTA Button */}
              <div>
                <button 
                  onClick={onBookClick}
                  className='px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'
                >
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;