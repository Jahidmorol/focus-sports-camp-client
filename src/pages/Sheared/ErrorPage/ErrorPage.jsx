import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const { error, status } = useRouteError();
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <img
        src=''
        alt="Error"
        className="w-[30rem] h-[20rem]  animate-pulse"
      />
      <h1 className="text-4xl font-bold text-[#80BD9E] mb-4">Oops!</h1>
      <p className="text-lg text-gray-700 mb-8">
        {error.message}
      </p>
      <Link
        to="/"
        className="bg-[#80BD9E] hover:bg-[#80BD9E] text-white font-bold py-2 px-4 rounded"
      >
        Go to Homepage
      </Link>
    </div>
    );
};

export default ErrorPage;