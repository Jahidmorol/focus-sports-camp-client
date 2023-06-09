import React from "react";
import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";

const ManageItemCard = ({ item, refetch, setSelectedClass }) => {
  const { _id, image, sportName, instructorName, instructorEmail, availableSeats, price, status } = item;
// console.log(item);

  const [axiosSecure] = useAxios();

  const handleSetStatus = async (status) => {
    try {
      const res = await axiosSecure.patch(`/sports/status/${_id}`, { status });
    //   console.log(response.data);
    if(res.data.modifiedCount > 0){
        refetch();
        Swal.fire({
            position: 'bottom-start',
            icon: 'success',
            title: 'Your Status has been saved',
            showConfirmButton: false,
            timer: 1000
          })
    }
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between">
      <div>
        <img
          src={image}
          alt={sportName}
          className="w-full h-auto rounded-md mb-4"
        />
        <h3 className="text-lg font-semibold mb-2">{sportName}</h3>
        <p className="text-sm mb-2">Instructor: {instructorName}</p>
        <p className="text-sm mb-2">Email: {instructorEmail}</p>
        <p className="text-sm mb-2">
          Available Seats: {availableSeats}
        </p>
        <p className="text-sm mb-2">Price: {price}</p>
        <p className="text-sm">Status: {status}</p>
      </div>
      <div className="flex justify-between mt-4">
        {status === "pending" && (
          <button
            onClick={() => handleSetStatus('approved')}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md mr-2"
          >
            Approve
          </button>
        )}
        {status === "pending" && (
          <button
            onClick={() => handleSetStatus('denied')}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
          >
            Deny
          </button>
        )}
        {(status === "approved" || status === "denied") && (
          <button
            onClick={() => setSelectedClass(item)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Send Feedback
          </button>
        )}
      </div>
    </div>
  );
};

export default ManageItemCard;
