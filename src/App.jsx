import React, { useState, useEffect } from "react";
import logo from "./assets/logo-placeholder.png";
import astrologerImg from "./assets/astrologer2.jpg";
import astroBg from "./assets/astro-bg.jpg";

// Add Google Fonts link for script font in index.html: <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet">

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="font-sans text-gray-800 min-h-screen bg-gradient-to-b from-yellow-50 to-purple-100">
      <Header />
      <main>
        <Hero onBookClick={() => setShowModal(true)} />
        <About />
        <Services />
        <LearnAstrology />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      {showModal && <ConsultationModal onClose={() => setShowModal(false)} />}
    </div>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={
      `py-6 shadow-lg fixed w-full top-0 left-0 z-30 transition-all rounded-b-2xl ` +
      (scrolled
        ? "bg-gradient-to-r from-purple-700 via-purple-600 to-purple-800 text-white"
        : "bg-transparent text-white")
    }>
      <div className="max-w-6xl mx-auto flex items-center px-4">
        <img src={logo} alt="Logo" className="h-12 w-12 rounded-full bg-white bg-opacity-80 p-1 shadow ml-0" />
        <nav className="flex-1 flex justify-end space-x-6 md:space-x-10 text-lg md:text-xl font-semibold">
          <a href="#hero" className="hover:text-orange-400 transition">Home</a>
          <a href="#about" className="hover:text-orange-400 transition">About</a>
          <a href="#services" className="hover:text-orange-400 transition">Services</a>
          <a href="#learn" className="hover:text-orange-400 transition">Learn Astrology</a>
          <a href="#faq" className="hover:text-orange-400 transition">FAQs</a>
          <a href="#contact" className="hover:text-orange-400 transition">Contact</a>
        </nav>
      </div>
    </header>
  );
}

function Hero({ onBookClick }) {
  return (
    <section id="hero" className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden" style={{backgroundImage: `url(${astroBg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
      <div className="relative z-20 flex flex-row items-center justify-between w-full max-w-6xl mx-auto px-4">
        {/* Left: Info */}
        <div className="flex-1 text-left text-white max-w-xl">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-2 drop-shadow-lg" style={{fontFamily: 'Great Vibes, cursive'}}>Pandit Shastri Ji</h1>
          <p className="text-2xl md:text-3xl text-purple-200 mb-4 font-semibold drop-shadow">Vedic Astrologer & Spiritual Guide</p>
          <div className="mb-6 text-lg">
            <p><span className="font-semibold">Phone:</span> <a href="tel:+919876543210" className="hover:underline text-yellow-200">+91-9876543210</a></p>
            <p><span className="font-semibold">Email:</span> <a href="mailto:contact@astrologer.com" className="hover:underline text-yellow-200">contact@astrologer.com</a></p>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Guiding You Through The Stars</h3>
          <p className="mb-8 text-lg md:text-xl text-purple-100">Tailored Astrological Guidance for Growth.</p>
          <button onClick={onBookClick} className="bg-gradient-to-r from-orange-400 to-yellow-300 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:from-orange-500 hover:to-yellow-400 transition">Book Consultation</button>
        </div>
        {/* Right: Astrologer Photo */}
        <div className="flex-1 flex justify-end items-end">
          <img
            src={astrologerImg}
            alt="Astrologer Shastri Ji"
            className="w-80 h-[32rem] object-cover object-top rounded-3xl shadow-2xl border-4 border-purple-200 bg-white bg-opacity-30"
            style={{marginRight: '-2rem'}}
          />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="p-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">About Shastri Ji</h2>
      <p>
        Shastri Ji is a renowned astrologer with 20+ years of experience in Vedic astrology,
        palmistry, and numerology. Known for accurate predictions and compassionate consultations.
      </p>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="p-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        "Kundli Matching",
        "Horoscope Reading",
        "Numerology",
        "Career Guidance",
        "Health & Wellness",
        "Marriage Solutions"
      ].map((service) => (
        <div key={service} className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-2">{service}</h3>
          <p className="text-sm">Detailed insights and remedies based on your astrological charts.</p>
        </div>
      ))}
    </section>
  );
}

function LearnAstrology() {
  return (
    <section id="learn" className="p-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">Learn Astrology</h2>
      <p className="text-gray-600">Join our courses and master the science of astrology from basics to advanced.</p>
      {/* Add course modules here */}
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="p-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">Frequently Asked Questions</h2>
      <p className="text-gray-600">Find answers to common questions about consultations, remedies, and astrology.</p>
      {/* Add FAQ items here */}
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="p-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">Contact</h2>
      <p>Email: contact@astrologer.com</p>
      <p>Phone: +91-9876543210</p>
      <p>Address: Rishikesh, Uttarakhand, India</p>
      {/* Add contact form here */}
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-200 text-center p-4 mt-10">
      <p>&copy; 2025 Astrologer Shastri Ji. All rights reserved.</p>
    </footer>
  );
}

function ConsultationModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative animate-fadeIn">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-2xl font-bold">&times;</button>
        <h2 className="text-2xl font-bold mb-4 text-purple-700">Book Consultation</h2>
        <form className="space-y-4">
           <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
          <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
          <input type="text" placeholder="Date of Birth" className="w-full p-2 border rounded" />
          <textarea placeholder="Your Query" className="w-full p-2 border rounded"></textarea>
          <button type="submit" className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 w-full">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
