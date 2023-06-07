import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "./SocialLogin";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const SignIn = () => {
  const { logIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission here
    logIn(data.email, data.password)
      .then(() => {
        Swal.fire({
          position: "bottom-start",
          icon: "success",
          title: "LogIn Success",
          showConfirmButton: false,
          timer: 1000,
        });
        reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        if (error) {
          setError(error.message);
        } else {
          setError("");
        }
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Helmet>
        <title>Summer Camp | SignIn</title>
      </Helmet>
      <div className="flex flex-col md:flex-row-reverse items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-md w-full md:w-1/2 px-6 py-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Sign In</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                placeholder="Email"
                type="email"
                id="email"
                {...register("email", { required: "Email is required" })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  placeholder="Password"
                  required
                  type={showPassword ? "text" : "password"}
                  id="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 pr-12"
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-3 transform -translate-y-1/2"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

            <input
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition duration-300"
              value="Sign In"
            />

            <SocialLogin></SocialLogin>

            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link
                  to="/signup"
                  className="text-blue-500 hover:text-blue-600"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>
        <div className="hidden md:block md:w-1/2">
          <img alt="Sign in" className="w-full h-auto" />
        </div>
      </div>
    </>
  );
};

export default SignIn;
