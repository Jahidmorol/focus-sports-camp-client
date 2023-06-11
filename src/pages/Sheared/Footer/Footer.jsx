import React from "react";
import { FaFacebook,  FaInstagram, FaTwitter } from "react-icons/fa";
import logo from '../../../assets/Coach/logo.png'

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="mb-4 md:mb-0 w-20 md:w-full mx-auto">
          <img src={logo} alt="Your Summer Camp" className="h-20" /> {/* Replace with your logo */}
        </div>
        <div className="w-full md:w-auto mt-4 md:mt-0">
          <div className="flex justify-center md:justify-end space-x-4">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-white text-2xl" />
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-white text-2xl" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white text-2xl" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <h2 className="text-white text-xl font-bold">Summer Camp</h2> {/* Your website name */}
        <p className="text-gray-400 text-sm mt-2">
          &copy; {new Date().getFullYear()} Your Summer Camp. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
