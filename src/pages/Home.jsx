import React from "react";
import Navbar from "../components/Navbar";
import Alert from "../components/Alert";
import Slider from "../components/Slider";

function Home() {
  return (
    <div>
      <Alert />
      <Navbar />
      <Slider />
    </div>
  );
}

export default Home;
