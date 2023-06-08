import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const PopulerClassCard = ({ sport }) => {
  const { image, sportName, instructorName, availableSeats, price } = sport;
  const isSeatsAvailable = availableSeats > 0;
  const { user } = useAuth();
  const navigate = useNavigate();

  const isAdmin = false;
  const isSelectable = isSeatsAvailable && !isAdmin;
  const [selected, setSelected] = useState(false);

  const handleSelect = () => {
    if (user) {
      console.log(user);
      setSelected(true); // Set the selected state to true
    } else {
      navigate("/signin");
      Swal.fire({
        position: "bottom-start",
        icon: "info",
        title: "Please log in before selecting the course.",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };

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

      <button
        onClick={handleSelect}
        disabled={!isSelectable || selected} // Disable the button if not selectable or already selected
        className={`w-full py-2 px-4 ${
          isSelectable ? "bg-blue-500" : "bg-gray-500"
        } ${selected && "bg-green-500 hover:bg-green-500"}  hover:bg-${
          isSelectable ? "blue" : "gray"
        }-600 text-white font-semibold rounded-md transition duration-300`}
      >
        {selected ? "Selected" : isSelectable ? "Select" : "Unavailable"}
      </button>
    </div>
  );
};

export default PopulerClassCard;
