import React from "react";
import useAxios from "../../../hooks/useAxios";
import useMyClass from "../../../hooks/useMyClass";

const MyClasses = () => {
  const [myClasses, setMyClasses] = useMyClass();
  const [axiosSecure] = useAxios();

  const handleDelete = (classId) => {
    axiosSecure
      .delete(`/mysports/${classId}`)
      .then(() => {
        // Remove the deleted class from the list
        setMyClasses(myClasses.filter((c) => c._id !== classId));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handlePay = (classId) => {
    // Implement the payment functionality here
    // You can redirect the user to a payment gateway or perform any other payment processing logic
    console.log("Pay for class with ID:", classId);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl text-center md:text-4xl font-semibold mb-4">My Classes</h2>

      {myClasses.length === 0 ? (
        <p>You haven't booked any classes yet.</p>
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
              {myClasses.map((classItem, index) => (
                <tr key={classItem._id} className='text-center'>
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
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1"
                      onClick={() => handlePay(classItem._id)}
                    >
                      Pay
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyClasses;
