import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";
import useMyClass from "../../../hooks/useMyClass";

const MyClasses = () => {
  const [myClasses, refetch] = useMyClass();
  const [axiosSecure] = useAxios();

  const handleDelete = (classId) => {
    // console.log(classId);
    axiosSecure
      .delete(`/myclases/${classId}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "bottom-start",
            icon: "success",
            title: "Your Class has been deleted successfully.",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl text-center md:text-4xl font-semibold mb-4">
        My Classes
      </h2>

      {myClasses.length === 0 ? (
        <p className="text-center md:text-3xl mt-16 text-red-400">
          You haven't booked any classes yet.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-4">Num</th>
                <th className="px-4 py-4">Sport Name</th>
                <th className="px-4 py-4">Instructor</th>
                <th className="px-4 py-4">Available Seats</th>
                <th className="px-4 py-4">Price</th>
                <th className="px-4 py-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {myClasses.map((classItem, index) => {
                return (
                  <tr key={classItem._id} className="text-center">
                    <td className="px-4 py-4">{index + 1}</td>
                    <td className="px-4 py-4">{classItem.sportName}</td>
                    <td className="px-4 py-4">{classItem.instructorName}</td>
                    <td className="px-4 py-4">{classItem.availableSeats}</td>
                    <td className="px-4 py-4">{classItem.price}</td>
                    <td className="px-4 py-4">
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 mr-2"
                        onClick={() => handleDelete(classItem._id)}
                      >
                        Delete
                      </button>
                      <Link to={`/dashboard/payment`} state={classItem}>
                        <button
                          className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1"
                        >
                          Pay
                        </button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyClasses;
