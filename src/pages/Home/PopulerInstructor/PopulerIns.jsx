import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Loading from "../../Sheared/Loading/Loading";
import { useQuery } from "@tanstack/react-query";

const PopulerIns = () => {
  const { isLoading: loader, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch("https://summer-camp-server-psi.vercel.app/users").then((res) => res.json()),
  });

  const instructors = users?.filter((user) => user?.role === "instructor");
  const instructorsLimit = instructors.slice(0, 6);

  if (loader) {
    return <Loading></Loading>;
  }
  return (
    <div className="w-[90%] mx-auto">
      <div>
        <h2 className="text-2xl mb-5 md:text-4xl font-bold text-center">
          Popular Instructors
        </h2>
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
            slidesPerView: 3,
          },
        }}
      >
        {instructorsLimit.map((instructor, index) => (
          <SwiperSlide key={index}>
            <div className="bg-slate-100 border-2 p-4 rounded-lg shadow-md">
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

//
