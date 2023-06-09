import React from "react";

const ManageItemCard = ({ item }) => {
  const { _id, image, className, instructorName, status } = item;

  const handleSetStatus = async (status) => {
    try {
      const response = await axios.put(`/sports/${_id}/status`, { status });
      // Handle the response as needed
      console.log(response.data);
    } catch (error) {
      // Handle errors
      console.error(error);
    }
  };


  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between">
      <div>
        <img
          src={image}
          alt={className}
          className="w-full h-auto rounded-md mb-4"
        />
        <h3 className="text-lg font-semibold mb-2">{className}</h3>
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
            onClick={() => handleSetStatus(_id)}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md mr-2"
          >
            Approve
          </button>
        )}
        {status === "pending" && (
          <button
            onClick={() => handleSetStatus(_id)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
          >
            Deny
          </button>
        )}
        {(status === "approved" || status === "denied") && (
          <button
            onClick={() => handleSetStatus()}
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
