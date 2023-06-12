import React from "react";
import img1 from "../../../assets/Banner img/img (1).jpg";
import img2 from "../../../assets/Banner img/img (2).jpg";
import img3 from "../../../assets/Banner img/img (3).jpg";
import img5 from "../../../assets/Banner img/img (5).jpg";
import img6 from "../../../assets/Banner img/img (6).jpg";
import img7 from "../../../assets/Banner img/img (7).jpg";

import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  return (
    <div className="w-[90%] mx-auto mt-1">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className=" md:h-screen">
            <img className=" w-[100%]" src={img7} alt="sliderimg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" md:h-screen">
            <img className=" w-[100%]" src={img2} alt="sliderimg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" md:h-screen">
            <img className=" w-[100%]" src={img3} alt="sliderimg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" md:h-screen">
            <img className=" w-[100%]" src={img5} alt="sliderimg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" md:h-screen">
            <img className=" w-[100%]" src={img6} alt="sliderimg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" md:h-screen">
            <img className=" w-[100%]" src={img1} alt="sliderimg" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
