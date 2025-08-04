import React, { useState } from 'react'
import kundli from "../assets/kundli.webp";

function Service() {
  const [showAllCards, setShowAllCards] = useState(false);

  const services = [
    {
      title: "Palm Reading",
      description: "Unlock the secrets hidden in the lines of your hand with our expert palm reading service. Our skilled astrologers analyze your palm to reveal insights about your personality, relationships, career, and life path.",
      image: kundli
    },
    {
      title: "Kundli Analysis",
      description: "Comprehensive birth chart analysis to understand your life's purpose, strengths, weaknesses, and future possibilities. Get detailed insights into your personality and life events.",
      image: kundli
    },
    {
      title: "Marriage Compatibility",
      description: "Expert analysis of marriage compatibility between partners using Vedic astrology. Understand relationship dynamics and ensure a harmonious married life.",
      image: kundli
    },
    {
      title: "Career Guidance",
      description: "Professional career guidance based on your birth chart. Discover your ideal career path, timing for job changes, and opportunities for growth and success.",
      image: kundli
    },
    {
      title: "Gemstone Recommendations",
      description: "Personalized gemstone recommendations based on your planetary positions. Learn which gemstones can enhance your luck and protect you from negative influences.",
      image: kundli
    },
    {
      title: "Planetary Remedies",
      description: "Effective remedies for planetary doshas and negative influences. Get personalized solutions including mantras, rituals, and lifestyle changes.",
      image: kundli
    },
    {
      title: "Numerology Consultation",
      description: "Discover the hidden meanings of numbers in your life. Our numerology experts analyze your name and birth date to reveal your life path and destiny.",
      image: kundli
    },
    {
      title: "Vastu Shastra",
      description: "Harmonize your living and working spaces with Vastu principles. Get expert advice on home and office layout for prosperity and positive energy.",
      image: kundli
    },
    {
      title: "Horoscope Reading",
      description: "Daily, weekly, and monthly horoscope readings tailored to your birth chart. Stay informed about upcoming opportunities and challenges.",
      image: kundli
    },
    {
      title: "Mangal Dosha Analysis",
      description: "Specialized analysis and remedies for Mangal Dosha (Mars affliction). Get solutions to minimize negative effects and ensure marital harmony.",
      image: kundli
    },
    {
      title: "Child Education Guidance",
      description: "Astrological guidance for your child's education and career choices. Understand their natural talents and guide them towards the right path.",
      image: kundli
    },
    {
      title: "Business Astrology",
      description: "Astrological guidance for business decisions, partnerships, and investments. Choose auspicious timings for important business ventures.",
      image: kundli
    },
    {
      title: "Health Astrology",
      description: "Understand health patterns and potential issues through astrological analysis. Get preventive measures and remedies for better health.",
      image: kundli
    },
    {
      title: "Travel Astrology",
      description: "Choose auspicious timings for travel and understand travel-related planetary influences. Ensure safe and successful journeys.",
      image: kundli
    },
    {
      title: "Property & Real Estate",
      description: "Astrological guidance for property investments and real estate decisions. Choose the right time and property for maximum benefits.",
      image: kundli
    }
  ];

  const displayedServices = showAllCards ? services : services.slice(0, 6);

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-serif">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of astrological services designed to guide you through life's journey with precision and wisdom
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedServices.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100 overflow-hidden"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
              
              {/* Hover Effect */}
              <div className="px-6 pb-6">
                <div className="w-full h-1 bg-gradient-to-r from-accent/20 to-accent/40 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        <div className="text-center">
          {!showAllCards && services.length > 6 && (
            <button 
              onClick={() => setShowAllCards(true)}
              className="px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View All Services
            </button>
          )}
          {showAllCards && (
            <button 
              onClick={() => setShowAllCards(false)}
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-accent hover:text-accent transition-all duration-300 transform hover:scale-105"
            >
              Show Less
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default Service;