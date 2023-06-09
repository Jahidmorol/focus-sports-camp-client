import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const useAxios = () => {
    const { logOut } = useAuth()
    const navigate = useNavigate();
  
    const axiosSecure = axios.create({
      baseURL: "http://localhost:5000",
    });
  
    useEffect(() => {
      axiosSecure.interceptors.request.use((config) => {
        const token = localStorage.getItem("summer-camp-token");
        if (token) {
          config.headers.authorization = `Bearer ${token}`;
        }
        return config;
      });
  
      axiosSecure.interceptors.response.use(
        (response) => response,
        async (error) => {
          if (
            error.response &&
            (error.response.status === 401 || error.response.status === 403)
          ) {
            await logOut();
            navigate("/signIn");
          }
          return Promise.reject(error);
        }
      );
    }, [axiosSecure, logOut, navigate]);
  
    return [axiosSecure];
};

export default useAxios;