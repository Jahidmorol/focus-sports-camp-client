import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import errorimg from '../../../assets/Coach/error.jpg'

const ErrorPage = () => {
    const { error, status } = useRouteError();
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <img
        src={errorimg}
        alt="Error"
        className="w-[20rem] rounded-full h-[20rem]  animate-pulse"
      />
      <h1 className="text-4xl font-bold text-blbg-blue-500 mb-4">Oops!</h1>
      <p className="text-lg text-gray-700 mb-8">
        {error.message}
      </p>
      <Link
        to="/"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Go to Homepage
      </Link>
    </div>
    );
};

export default ErrorPage;