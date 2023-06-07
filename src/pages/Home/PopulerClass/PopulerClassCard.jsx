import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const PopulerClassCard = ({ sport, isLoggedIn, isAdmin }) => {
  // const ClassCard = ({ image, name: sportName, instructorName, availableSeats, price, isLoggedIn, isAdmin }) => {
  const { image, sportName, instructorName, availableSeats, price } = sport;
  const isSeatsAvailable = availableSeats > 0;

  const isSelectable = isSeatsAvailable && isLoggedIn && !isAdmin;

  return (
    <div
      className={`${
        isSeatsAvailable ? "bg-white" : "bg-red-600 text-white"
      } p-4 rounded-lg shadow-md`}
    >
      <div className="w-[99%] mx-auto h-[12rem] mb-4">
        <img
          src={image}
          alt={sportName}
          className="w-full h-[12rem] rounded-md"
        />
      </div>
      <h3 className="text-lg font-semibold">{sportName}</h3>
      <p className="text-sm  mb-2">Instructor: {instructorName}</p>
      <p className="text-sm  mb-2">Available Seats: {availableSeats}</p>
      <p className="text-sm  mb-4">Price: {price}</p>
      {!isLoggedIn && (
        <p className="text-red-500 text-sm mb-4">
          Please log in before selecting the course.
        </p>
      )}
      <button
        disabled={!isSelectable}
        className={`w-full py-2 px-4 bg-${
          isSelectable ? "blue" : "gray"
        }-500 hover:bg-${
          isSelectable ? "blue" : "gray"
        }-600 text-white font-semibold rounded-md transition duration-300`}
      >
        {isSelectable ? "Select" : "Unavailable"}
      </button>
    </div>
  );
};

export default PopulerClassCard;
