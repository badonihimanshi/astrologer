import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Book from "./components/Book";

function App() {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <div className="font-sans text-gray-800 bg-white antialiased">
      <Navbar />
      <main className="min-h-screen">
        <Home onBookClick={() => setShowModal(true)} />
        <About onBookClick={() => setShowModal(true)} />
        <Service />
        <Contact />
      </main>
      <Footer />
      {showModal && <Book onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default App;
