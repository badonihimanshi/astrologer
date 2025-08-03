import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Book from "./components/Book";

// Add Google Fonts link for script font in index.html: <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet">

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="font-sans text-gray-800 bg-gradient-to-b from-yellow-50 to-purple-100">
      <Navbar />
      {/* <main> */}
        <Home onBookClick={() => setShowModal(true)} />
        <About />
        <Service />
        <Contact />
      {/* </main> */}
      {/* <Footer />
      {showModal && <Book onClose={() => setShowModal(false)} />} */}
    </div>
  );
}
export default App;
