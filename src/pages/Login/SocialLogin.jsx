import React from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogle = () => {
    signInWithGoogle().then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser?.photoURL);
      const saveUser = {
        image: loggedInUser?.photoURL,
        name: loggedInUser.displayName,
        email: loggedInUser.email,
        role: "student",
      };
      fetch("https://summer-camp-server-psi.vercel.app/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {});
      Swal.fire({
        position: "bottom-start",
        icon: "success",
        title: "LogIn Success",
        showConfirmButton: false,
        timer: 1000,
      });
      navigate(from, { replace: true });
    });
  };
  return (
    <div className="flex items-center justify-center pt-4">
      <p className="text-gray-600">Or sign up with:</p>
      <button onClick={handleGoogle} className="ml-2">
        <FaGoogle className="text-2xl text-blue-500 "></FaGoogle>
      </button>
    </div>
  );
};

export default SocialLogin;
