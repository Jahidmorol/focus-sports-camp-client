import React from "react";
import { Navigation, Autoplay } from "swiper";
import './Banner.css'
import "swiper/css/navigation";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../../assets/Banner img/img (1).jpg";
import img2 from "../../../assets/Banner img/img (2).jpg";
import img3 from "../../../assets/Banner img/img (3).jpg";
import img5 from "../../../assets/Banner img/img (5).jpg";
import img6 from "../../../assets/Banner img/img (6).jpg";
import img7 from "../../../assets/Banner img/img (7).jpg";

const Banner = () => {
  const images = [img7, img2, img3, img5, img6, img1];

  return (
    <div className="relative">
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        autoplay={{ delay: 3000, disableOnInteraction: false, reverseDirection: true }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="md:h-[40rem] relative">
              <img className="w-full h-full object-cover" src={image} alt={`sliderimg-${index}`} />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
                {/* Add the heading text */}
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center animation-heading">
                  Welcome to Our Focus Sports School
                </h1>
                <button className="bg-[#4fa9e3] md:font-semibold text-white px-6 py-2 md:py-3 rounded-lg hover:bg-[#fbbe2b] hover:bg-opacity-80 hover:text-black transition duration-300">
                  MORE INFO
                </button>
                {/* Add the line */}
                <div className="animation-line mt-6 hidden md:block md:w-[30rem] h-[2px] "></div>
                <div className="animation-line mt-4 hidden md:block md:w-[25rem] h-[2px] "></div>
                <div className="animation-line mt-4 hidden md:block md:w-[20rem] h-[2px] "></div>
                <div className="animation-line mt-4 hidden md:block md:w-[15rem] h-[2px] "></div>
                <div className="animation-line mt-4 hidden md:block md:w-[10rem] h-[2px] "></div>
                <div className="animation-line mt-4 hidden md:block md:w-[5rem] h-[2px] "></div>
                <div className="animation-line mt-4 hidden md:block md:w-[1rem] h-[2px] "></div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
