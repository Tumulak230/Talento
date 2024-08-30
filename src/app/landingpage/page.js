import React from 'react';

export default function LandingPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "landpage.png" }} 
    >
      <header className="bg-orange-600 bg-opacity-75 p-4">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-white text-2xl font-bold">TALENTO</a>
          </div>
          <div className="hidden lg:flex space-x-8">
            <a href="#" className="text-orange-100 text-lg">Home</a>
            <a href="#" className="text-orange-100 text-lg">Category</a>
            <a href="#" className="text-orange-100 text-lg">About Us</a>
          </div>
          <div>
            <a href="/login" className="bg-orange-500 text-white px-4 py-2 rounded-lg">Log in</a>
          </div>
        </nav>
      </header>

      <main className="bg-orange-600 bg-opacity-85 text-white py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Book a Talent for your Event!</h1>
          <div className="flex justify-center space-x-4 mb-8">
            <select className="w-1/2 p-2 text-gray-900">
              <option>Select Event</option>
              <option>Party</option>
              <option>Birthday</option>
            </select>
            <select className="w-1/2 p-2 text-gray-900">
              <option>Select Theme</option>
              <option>Rock</option>
              <option>Romance</option>
              <option>Comedy</option>
            </select>
          </div>
          <button className="bg-orange-700 px-6 py-2 rounded-md">Search</button>
        </div>
      </main>

      <section className="py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Browse By Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-orange-300 h-48 flex items-center justify-center text-gray-800 font-bold">
              Singer
            </div>
            <div className="bg-orange-300 h-48 flex items-center justify-center text-gray-800 font-bold">
              Dancer
            </div>
            <div className="bg-orange-300 h-48 flex items-center justify-center text-gray-800 font-bold">
              Musician
            </div>
            <div className="bg-orange-300 h-48 flex items-center justify-center text-gray-800 font-bold">
              Band
            </div>
            <div className="bg-orange-300 h-48 flex items-center justify-center text-gray-800 font-bold">
              Entertainer
            </div>
            <div className="bg-orange-300 h-48 flex items-center justify-center text-gray-800 font-bold">
              Dj
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
