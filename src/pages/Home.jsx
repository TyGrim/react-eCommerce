import React from "react";
import Navbar from "../components/Navbar";
import Alert from "../components/Alert";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";

function Home() {
  return (
    <div>
      <Alert />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
    </div>
  );
}

export default Home;
