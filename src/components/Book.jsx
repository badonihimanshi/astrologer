import React from 'react'


function Book({ onClose }) {
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

export default Book;