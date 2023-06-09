import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";
const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddClass = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const [axiosSecure] = useAxios();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const instructorName = user.displayName;
  const instructorEmail = user.email;

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("image", data.classImage[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgRes) => {
        if (imgRes.success) {
          const imgURL = imgRes.data.display_url;
          const { className, availableSeats, price } = data;

          const newClass = {
            sportName: className,
            image: imgURL,
            instructorName,
            instructorEmail,
            availableSeats: parseFloat(availableSeats),
            price: parseFloat(price),
            status: "pending",
          };
          axiosSecure.post("/sports", newClass).then((res) => {
            console.log(res.data);
            if (res.data.insertedId) {
              Swal.fire({
                position: "bottom-start",
                icon: "success",
                title: "Class added successfully.",
                showConfirmButton: false,
                timer: 1000,
              });
              reset();
              setLoading(false);
            }
          });
        }
      });
  };

  return (
    <div className="w-[90%] mx-auto bg-inherit p-6 my-5 ">
      <h1 className="text-2xl md:text-4xl text-center font-bold mb-10">
        Add a Class
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:flex gap-4">
          <div className="mb-4 md:w-1/2">
            <label className="block font-semibold mb-1">Instructor Name</label>
            <input
              type="text"
              value={instructorName}
              readOnly
              className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100"
            />
          </div>
          <div className="mb-4 md:w-1/2">
            <label className="block font-semibold mb-1">Instructor Email</label>
            <input
              type="email"
              value={instructorEmail}
              readOnly
              className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100"
            />
          </div>
        </div>
        <div className="md:flex gap-4">
          <div className="mb-4 md:w-1/2">
            <label className="block font-semibold mb-1">Class Name</label>
            <input
              {...register("className", { required: true })}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
            {errors.className && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>
          <div className="mb-4 md:w-1/2">
            <label className="block font-semibold mb-1">Class Image</label>
            <input
              type="file"
              {...register("classImage", { required: true })}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
            {errors.classImage && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>
        </div>
        <div className="md:flex gap-4">
          <div className="mb-4 md:w-1/2">
            <label className="block font-semibold mb-1">Available Seats</label>
            <input
              {...register("availableSeats", { required: true, min: 0 })}
              type="number"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
            {errors.availableSeats && (
              <span className="text-red-500 text-sm">
                This field is required and must be a non-negative number
              </span>
            )}
          </div>
          <div className="mb-4 md:w-1/2">
            <label className="block font-semibold mb-1">Price</label>
            <input
              {...register("price", { required: true, min: 0 })}
              type="number"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
            {errors.price && (
              <span className="text-red-500 text-sm">
                This field is required and must be a non-negative number
              </span>
            )}
          </div>
        </div>
        <button
          disabled={loading}
          type="submit"
          className={`${loading && "bg-slate-200 hover:bg-slate-200"} bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4`}
        >
          {loading? <div className="border-4 border-blue-500 w-6 h-6 rounded-full border-dashed animate-spin"></div> : "Add"}
        </button>
      </form>
    </div>
  );
};

export default AddClass;
