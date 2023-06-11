import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="w-[95%] mx-auto py-12 bg-gray-100 mb-10">
      <div className="w-[85%] mx-auto">
        <div className="flex flex-col items-center justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold text-center text-gray-800 mb-6"
          >
            About Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 text-center mb-8"
          >
            Welcome to Summer Camp, where sports and fun collide! We're passionate about helping young athletes discover their potential and develop their skills. Join us for an unforgettable summer of sports, friendship, and adventure!
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-lg p-6 shadow-md"
          >
            <h3 className="text-xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              We foster a love for sports and physical activity among children and teenagers. Our mission is to create an environment that encourages personal growth, teamwork, and sportsmanship.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white rounded-lg p-6 shadow-md"
          >
            <h3 className="text-xl font-bold mb-4">Our Values</h3>
            <p className="text-gray-600">
              Integrity, respect, teamwork, and personal growth are our core values. We create a supportive and inclusive community where every camper feels valued and encouraged to reach their full potential.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-white rounded-lg p-6 shadow-md"
          >
            <h3 className="text-xl font-bold mb-4">Our Team</h3>
            <p className="text-gray-600">
              Our experienced and passionate coaches provide the best sports camp experience. They inspire campers to push their limits, learn new skills, and have fun while doing so.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
