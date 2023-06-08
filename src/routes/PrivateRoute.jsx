import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';
import Loading from '../pages/Sheared/Loading/Loading';

const PrivateRoute = ({children}) => {
    const { loading, user } = useAuth()
    const location = useLocation();
  
    if (loading) {
      return <Loading></Loading>;
    }
  
    if (user?.email) {
      return children;
    } else {
      useEffect(() => {
        Swal.fire({
          title: "Warning!",
          text: "You have to log in first to view details",
          icon: "warning",
          confirmButtonText: "OK",
        });
      }, []);
    }
  
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;