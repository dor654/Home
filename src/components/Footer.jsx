import React from "react";

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-sm">
            We offer a curated selection of high-quality products to meet all
            your needs. Explore our popular categories and enjoy the best deals.
          </p>
        </div>
        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Categories
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <ul className="flex space-x-4">
            <li>
              <a href="#" aria-label="Facebook" className="hover:text-blue-400">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" aria-label="Twitter" className="hover:text-blue-400">
                Twitter
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-blue-400"
              >
                Instagram
              </a>
            </li>
            <li>
              <a href="#" aria-label="LinkedIn" className="hover:text-blue-400">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Copyright */}
      <div className="mt-8 text-center text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
