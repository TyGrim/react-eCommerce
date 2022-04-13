import React from "react";
import Navbar from "../components/Navbar";
import Alert from "../components/Alert";
import Slider from "../components/Slider";
import Categories from "../components/Categories";

function Home() {
  return (
    <div>
      <Alert />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  );
}

export default Home;
