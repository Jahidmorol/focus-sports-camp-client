import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const PopulerClassCard = ({ sport }) => {
  const { image, sportName, instructorName, availableSeats, price } = sport;
  const isSeatsAvailable = availableSeats > 0;
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`${
        isSeatsAvailable ? "bg-slate-100" : "bg-red-600 text-white"
      } p-4 rounded-lg shadow-md relative`}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative aspect-w-2 aspect-h-3 mb-4">
        <img
          src={image}
          alt={sportName}
          className={`object-cover h-[18rem] rounded-md ${
            isHovered ? "opacity-50 transition duration-500 ease-in-out" : "opacity-100 transition duration-500 ease-in-out"
          }`}
        />
        {isHovered && (
          <div className="class-card-details absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white text-center bg-black bg-opacity-75 p-4 transition duration-500 ease-in-out">
            <h3 className="text-2xl mb-2 font-semibold">{sportName}</h3>
            <p className="text-sm mb-2">Instructor: {instructorName}</p>
            <p className="text-sm mb-2">Available Seats: {availableSeats}</p>
            <p className="text-sm mb-4">Price: {price}</p>
            <div>
              <Link
                to="/classes"
                className="flex items-center justify-center text-white bg-[#4fa9e3] px-4 py-2 rounded-full transition duration-300 ease-in-out hover:bg-[#fbbe2b] hover:bg-opacity-80 hover:text-black"
              >
                <FaRegEye className="mr-2" />
                View More
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopulerClassCard;
