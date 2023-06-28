import React from "react";
import Navbar from "../components/Navbar";
import Announcment from "../components/Announcment";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <div>
      <Announcment />
      <Navbar />
      <Slider />
    </div>
  );
}
