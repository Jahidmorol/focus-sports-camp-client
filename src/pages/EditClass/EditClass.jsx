import React from 'react';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const EditClass = () => {
    const location = useLocation()
    const classesItem = location.state;
    // console.log(location.classItem);
    const { price, availableSeats, _id } = classesItem;

    const handleSubmit = (e) => {
      e.preventDefault();
  
      const form = e.target;
      const price = parseInt(form.price.value);
      const availableSeats = parseInt(form.quantity.value);
  
      const upDateNewClass = {
        price,
        availableSeats,
      };
      // console.log(upDateNewClass);
      fetch(`https://summer-camp-server-psi.vercel.app/editsport/${_id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(upDateNewClass),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            Swal.fire({
              title: "Update You Class Price and Seats !!",
              text: "Do you want to continue",
              icon: "success",
              confirmButtonText: "ok",
            });
            form.reset();
          }
        });
    };
  
    return (
      <div className='w-full'>
        <h1 className="text-center text-[#3173DE] font-extrabold text-4xl mt-24 mb-5">
          Update Your Class
        </h1>
        <div className=" rounded-md w-2/4 mx-auto mb-10 border-2 border-[#3173DE]">
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto px-12 py-6">
            <div className="mb-4">
              <label
                htmlFor="price"
                className="block text-gray-700 font-bold mb-2"
              >
                Price
              </label>
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered w-full text-black border-solid border-2 border-[#3173DE] "
                defaultValue={price}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="quantity"
                className="block text-gray-700 font-bold mb-2"
              >
                Available Seates
              </label>
              <input
                type="number"
                name="quantity"
                placeholder="Available seats"
                className="input input-bordered w-full text-black  border-solid border-2 border-[#3173DE]"
                defaultValue={availableSeats}
                required
              />
            </div>
  
            <div>
              <input
                type="submit"
                value="Update"
                className="btn btn-accent text-white border-0 bg-[#6144FF] btn-block"
              />
            </div>
          </form>
        </div>
      </div>
    );
};

export default EditClass;