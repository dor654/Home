import React, { useState } from "react";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", email, password);
  };

  return (
    <div className="relative bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Sidebar - Categories */}
          <div className="col-span-3 hidden md:block bg-white rounded-lg shadow p-4">
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
             
              <li>
                <a href="#" className="hover:text-blue-500">
                  Clothes and Wear
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Home Interiors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Computer and Tech
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Tools, Equipment
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Sports and Outdoor
                </a>
              </li>
              
              <li>
                <a href="#" className="hover:text-blue-500">
                  Machinery Tools
                </a>
              </li>
            
            </ul>
          </div>

          {/* Center - Hero Section */}
          <div className="  col-span-6 bg-gradient-to-r from-blue-600 to-blue-900 text-white rounded-lg p-8">
            <h1 className="text-4xl md:text-4xl font-bold mb-4">
              Latest Trending
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Electronic Items
            </h2>
            <button
              onClick={() => window.scrollTo({ top: 1000, behavior: "smooth" })}
              className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Learn More
            </button>
            <div className="mt-8">
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60"
                alt="Headphones"
                className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Right Sidebar - Login Section */}
          <div className="col-span-3 hidden md:block bg-white rounded-lg shadow p-4">
            <h3 className="text-lg font-semibold mb-4">Hi, User!</h3>
            <p className="mb-4">Let’s get started</p>
            <div className="space-y-2">
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                Join Now
              </button>
              <button className="w-full bg-white text-blue-500 border border-blue-500 py-2 rounded-lg hover:bg-blue-50">
                Log In
              </button>
            </div>
            <div className="mt-6 space-y-4">
              <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600">
                Get US $10 off with a new supplier
              </button>
              <button className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600">
                Send quotes with supplier preferences
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
