import React from "react";
import { Helmet } from "react-helmet-async";
import useSports from "../../hooks/useSports";
import PopulerClassCard from "../Home/PopulerClass/PopulerClassCard";
import Loading from "../Sheared/Loading/Loading";

const Classes = () => {
  const [sports, loader] = useSports();

  if (loader) {
    return <Loading></Loading>;
  }

  const isLoggedIn = () => {};
  const isAdmin = () => {};
  return (
    <div className="my-20">
      <Helmet>
        <title>Summer Camp | Classes</title>
      </Helmet>
      <div>
        <h2 className="text-4xl font-bold text-center">Classes</h2>
      </div>
      <div className="w-[85%] mx-auto mt-10 grid gap-5 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
        {sports.map((sport) => (
          <PopulerClassCard
            key={sport._id}
            sport={sport}
            isLoggedIn={isLoggedIn}
            isAdmin={isAdmin}
          ></PopulerClassCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
