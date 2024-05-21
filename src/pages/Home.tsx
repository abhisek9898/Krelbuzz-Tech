// src/pages/Home.tsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "animate.css/animate.min.css";
import backgroundImage from "../assets/KHome.jpeg";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <main
        className="p-4"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "83.4vh",
          maxHeight: "100%",
        }}
      >
        <h1 className="text-7xl font-bold text-center my-20 animate__animated animate__zoomIn text-white">
          Krelbuzz Tech
        </h1>
        <p className="text-xl lg:text-1xl xl:text-2xl text-center mb-6 animate__animated animate__slideInDown text-slate-200">
          Welcome to Krelbuzz Tech, where innovation meets excellence! <br />
          At Krelbuzz, we are passionate about harnessing the power of
          technology to drive your success forward. <br />
          As a leading IT service and mobile app development company, we thrive
          on turning your ideas into reality, <br /> crafting cutting-edge
          solutions that propel your business to new heights.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default Home;
