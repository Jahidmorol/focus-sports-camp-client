import React from "react";
import { Helmet } from "react-helmet-async";
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
        <PopulerIns></PopulerIns>
    </div>
  );
};

export default Home;
