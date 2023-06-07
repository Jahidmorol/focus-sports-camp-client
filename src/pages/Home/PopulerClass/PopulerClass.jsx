import React from "react";
import PopulerClassCard from "./PopulerClassCard";
import sports from "../../../../public/sports.json";

const PopulerClass = () => {
  const isLoggedIn = () => {};
  const isAdmin = () => {};
  return (
    <div className="my-20">
        <div>
            <h2 className="text-4xl font-bold text-center">Populer Classes</h2>
        </div>
        <div className="w-[85%] mx-auto mt-10 grid gap-5 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
      {sports.map((sport, index) => (
        <PopulerClassCard
          key={index}
          sport={sport}
          isLoggedIn={isLoggedIn}
          isAdmin={isAdmin}
        ></PopulerClassCard>
      ))}
    </div>
    </div>
  );
};

export default PopulerClass;
