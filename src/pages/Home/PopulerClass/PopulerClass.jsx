import React from "react";
import PopulerClassCard from "./PopulerClassCard";
import Loading from "../../Sheared/Loading/Loading";
import { useQuery } from "@tanstack/react-query";

const PopulerClass = () => {
  const { data: populers = [], isLoading: loader } = useQuery({
    queryKey: ["sports/populer"],
    queryFn: async () => {
      const res = await fetch("https://summer-camp-server-psi.vercel.app/sports/populer");
      return res.json();
    },
  });

  if (loader) {
    return <Loading></Loading>;
  }

  return (
    <div className="my-10 md:my-20">
      <div>
        <h2 className="text-2xl md:text-4xl font-bold text-center">Populer Classes</h2>
      </div>
      <div className="w-[85%] mx-auto mt-10 grid gap-5 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
        {populers.map((sport, index) => (
          <PopulerClassCard key={index} sport={sport}></PopulerClassCard>
        ))}
      </div>
    </div>
  );
};

export default PopulerClass;
