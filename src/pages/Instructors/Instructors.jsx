import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";

import Loading from "../Sheared/Loading/Loading";
import InstructorCard from "./InstructorCard";

const Instructors = () => {

  const { isLoading: loader, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch("http://localhost:5000/users").then((res) => res.json()),
  });

  const instructors = users?.filter((user) => user?.role === "instructor");

  if (loader) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <Helmet>
        <title>Summer Camp | Instructors</title>
      </Helmet>
      <div className="w-[16rem] mx-auto my-10 ">
        <div className="text-left flex justify-start items-center">
          <span className="loading loading-ring text-blue-400 loading-lg"></span>
          <span className="loading loading-ring text-blue-400 loading-md"></span>
          <span className="loading loading-ring text-blue-400 loading-sm"></span>
          <span className="loading loading-ring text-blue-400 loading-xs"></span>
        </div>
        <h2 className="text-center text-2xl md:text-4xl font-bold ">
          Instructors
        </h2>
        <div className="text-right flex justify-end items-center">
          <span className="loading loading-ring text-blue-400 loading-xs"></span>
          <span className="loading loading-ring text-blue-400 loading-sm"></span>
          <span className="loading loading-ring text-blue-400 loading-md"></span>
          <span className="loading loading-ring text-blue-400 loading-lg"></span>
        </div>
      </div>
      <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {instructors.map((instructor, index) => (
          <InstructorCard key={index} instructor={instructor}></InstructorCard>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
