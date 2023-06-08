import React from "react";
import useInstructors from "../../hooks/useInstructors";
import Loading from "../Sheared/Loading/Loading";
import InstructorCard from "./InstructorCard";

const Instructors = () => {
    const [instructors, loader] = useInstructors();
    if(loader){
        return <Loading></Loading>
    }
    
  return (
    <div>
      <h2 className="text-center text-2xl md:text-4xl font-bold md:my-10">
        Instructors
      </h2>
      <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {instructors.map((instructor, index) => (
          <InstructorCard key={index} instructor={instructor}></InstructorCard>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
