import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';

const SocialLogin = () => {
    const {signInWithGoogle} = useAuth()
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogle = () => {
        signInWithGoogle()
        .then(() => {
            Swal.fire({
                position: 'bottom-start',
                icon: 'success',
                title: 'LogIn Success',
                showConfirmButton: false,
                timer: 1000
              })
              navigate(from, { replace: true });
        })
       
    }
    return (
        <div className="flex items-center justify-center">
            <p className="text-gray-600">Or sign up with:</p>
            <button onClick={handleGoogle} className="ml-2">
                <FaGoogle className='text-2xl text-yellow-700 '></FaGoogle>
            </button>
          </div>
    );
};

export default SocialLogin;