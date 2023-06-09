import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import useMyClass from "../../hooks/useMyClass";

const ClassCard = ({ sport }) => {
    const {
        _id,
        image,
        sportName,
        instructorName,
        availableSeats,
        price,
      } = sport;
      const isSeatsAvailable = availableSeats > 0;
      const { user } = useAuth();
      const navigate = useNavigate();
    
      const isAdmin = false;
      const isInstructor = false;
      const isSelectable = isSeatsAvailable && !isAdmin && !isInstructor;
      const [selected, setSelected] = useState(false);
      const [axiosSecure] = useAxios();
      const [myclases] = useMyClass();
    
      useEffect(() => {
        const selectedSport = myclases.find((c) => c.sportId === _id);
        setSelected(!!selectedSport);
      }, [myclases, _id]);
    
      const handleSelect = (sport) => {
        if (user) {
          if (selected) {
            return;
          }
    
          setSelected(true);
          const newSport = {
            sportId: _id,
            email: user.email,
            image,
            sportName,
            instructorName,
            availableSeats,
            price,
          };
    
          axiosSecure
            .post(`/myclases?email=${user.email}`, newSport)
            .then((res) => {
              console.log(res.data);
              if (res.data === "card already exists") {
                // Handle case when the sport is already selected
              }
              if (res.data.insertedId) {
                Swal.fire({
                  position: "bottom-start",
                  icon: "success",
                  title: "Your Class has been selected successfully.",
                  showConfirmButton: false,
                  timer: 1000,
                });
              }
            });
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
          <p className="text-sm mb-2">Instructor: {instructorName}</p>
          <p className="text-sm mb-2">Available Seats: {availableSeats}</p>
          <p className="text-sm mb-4">Price: {price}</p>
    
          <button
            onClick={() => handleSelect(sport)}
            disabled={!isSelectable || selected}
            className={`w-full py-2 px-4 ${
              isSelectable ? "bg-blue-500" : ""
            } ${selected && "bg-green-500 hover:bg-green-500"} hover:bg-${
              isSelectable ? "blue" : ""
            }-600 text-white font-semibold rounded-md transition duration-300`}
          >
            {selected ? "Selected" : isSelectable ? "Select" : "Unavailable"}
          </button>
        </div>
      );
    };


export default ClassCard;
