import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import instructors from "../../../../public/instructors.json";
// import PopulerInsCard from "./PopulerInsCard";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const PopulerIns = () => {
  return (
    <div className="w-[90%] mx-auto">
      <div>
        <h2 className="text-2xl mb-5 md:text-4xl font-bold text-center">Popular Instructors</h2>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper md:my-10"
        breakpoints={{
          640: {
            slidesPerView: 4,
          },
        }}
      >
        {instructors.map((instructor, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white border-2 p-4 rounded-lg shadow-md">
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-full h-[18rem] md:h-[20rem] rounded-md mb-4"
              />
              <h3 className="text-lg font-bold">{instructor.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{instructor.email}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    
  );
};

export default PopulerIns;


// <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
    //     {
    //         instructors.map((instructor, index) => <PopulerInsCard key={index} instructor={instructor}></PopulerInsCard>)
    //     }
    // </div>