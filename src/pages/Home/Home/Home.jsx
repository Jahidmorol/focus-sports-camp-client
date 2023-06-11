import React from "react";
import { Helmet } from "react-helmet-async";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import PopulerClass from "../PopulerClass/PopulerClass";
import PopulerIns from "../PopulerInstructor/PopulerIns";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Summer Camp | Home</title>
      </Helmet>

        <Banner></Banner>
        <PopulerClass></PopulerClass>
        <AboutUs></AboutUs>
        <PopulerIns></PopulerIns>
    </div>
  );
};

export default Home;
