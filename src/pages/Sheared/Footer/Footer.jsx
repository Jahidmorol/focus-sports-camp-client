// import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
// import { Link } from "react-router-dom";
import logo from "../../../assets/Coach/logo.png";

import React from "react";

const Footer = () => {
  return (
    <footer >
      
      <div className="footer p-5 mt-10 md:mt-20 md:p-10 bg-base-200 text-base-content">
        <div>
          <img src={logo} alt="logo" className="h-20 w-20"/>
          <span className="footer-title">Fucus Sports School</span>      
          <div className="link link-hover flex gap-5"><FaFacebook/> <FaInstagram/> <FaTwitter/></div>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="footer-title">Newsletter</span>
          <div className="form-control md:w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn bg-[#4fa9e3] text-white absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
