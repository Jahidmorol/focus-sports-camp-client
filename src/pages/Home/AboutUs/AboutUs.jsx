import React from "react";
import { FaBullseye, FaBusinessTime, FaJoomla } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="w-[95%] mx-auto py-12 mb-10">
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-6">About Us</h2>
          <p className="text-center mb-8">
            Welcome to Summer Camp, where sports and fun collide! We're passionate about helping young athletes discover their potential and develop their skills. Join us for an unforgettable summer of sports, friendship, and adventure!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative group border-2 border-slate-100 rounded-lg p-6 shadow-md">
            <div className="flex flex-col items-center">
              <FaBullseye className="h-14 w-14 text-[#4fa9e3]" />
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
            </div>
            <p className="text-gray-600">
              We foster a love for sports and physical activity among children and teenagers. Our mission is to create an environment that encourages personal growth, teamwork, and sportsmanship.
            </p>
            <div className="absolute top-0 right-0 w-12 h-16 border-t-2 border-r-2 border-[#fbbe2b] rounded-s-none rounded-t-md opacity-0 group-hover:opacity-100 transition duration-300"></div>
            <div className="absolute bottom-0 left-0 w-12 h-16 border-b-2 border-l-2 border-[#4fa9e3] rounded-e-none rounded-b-md opacity-0 group-hover:opacity-100 transition duration-300"></div>
          </div>
          <div className="relative group border-2 border-slate-100 rounded-lg p-6 shadow-md">
            <div className="flex flex-col items-center">
              <FaBusinessTime className="h-14 w-14 text-[#4fa9e3]" />
              <h3 className="text-xl font-bold mb-4">Our Values</h3>
            </div>
            <p className="text-gray-600">
              Integrity, respect, teamwork, and personal growth are our core values. We create a supportive and inclusive community where every camper feels valued and encouraged to reach their full potential.
            </p>
            <div className="absolute top-0 right-0 w-12 h-16 border-t-2 border-r-2 border-[#fbbe2b] rounded-s-none rounded-t-md opacity-0 group-hover:opacity-100 transition duration-300"></div>
            <div className="absolute bottom-0 left-0 w-12 h-16 border-b-2 border-l-2 border-[#4fa9e3] rounded-e-none rounded-b-md opacity-0 group-hover:opacity-100 transition duration-300"></div>
          </div>
          <div className="relative group border-2 border-slate-100 rounded-lg p-6 shadow-md">
            <div className="flex flex-col items-center">
              <FaJoomla className="h-14 w-14 text-[#4fa9e3]" />
              <h3 className="text-xl font-bold mb-4">Our Team</h3>
            </div>
            <p className="text-gray-600">
              Our experienced and passionate coaches provide the best sports camp experience. They inspire campers to push their limits, learn new skills, and have fun while doing so.
            </p>
            <div className="absolute top-0 right-0 w-12 h-16 border-t-2 border-r-2 border-[#fbbe2b] rounded-s-none rounded-t-md opacity-0 group-hover:opacity-100 transition duration-300"></div>
            <div className="absolute bottom-0 left-0 w-12 h-16 border-b-2 border-l-2 border-[#4fa9e3] rounded-e-none rounded-b-md opacity-0 group-hover:opacity-100 transition duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
