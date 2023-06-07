import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopulerClass from "../PopulerClass/PopulerClass";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Summer Camp | Home</title>
      </Helmet>

        <Banner></Banner>
        <PopulerClass></PopulerClass>
    </div>
  );
};

export default Home;
