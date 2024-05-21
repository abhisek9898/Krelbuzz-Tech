import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import { FaMobileAlt, FaCloud, FaLock } from "react-icons/fa";
import backgroundImage from "../assets/KServices.jpeg";

const Services: React.FC = () => {
  const [isZoomedIn, setIsZoomedIn] = useState(false);

  const services = [
    {
      title: "Mobile App Development",
      description:
        "We create amazing mobile applications for both iOS and Android platforms.",
      icon: <FaMobileAlt />,
    },
    {
      title: "Cloud Solutions",
      description:
        "Scalable and secure cloud solutions to meet your business needs.",
      icon: <FaCloud />,
    },
    {
      title: "Cybersecurity",
      description:
        "Protect your business with our top-notch cybersecurity services.",
      icon: <FaLock />,
    },
  ];

  useEffect(() => {
    setIsZoomedIn(true);
  }, []);

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
        }}
      >
        <h1 className="text-5xl font-bold text-center my-8">Our Services</h1>
        <p className="text-center mb-16 text-1xl text-black font-bold animate__animated animate__slideInDown">
          At Krelbuzz Technologies, we specialize in creating cutting-edge
          mobile applications and cloud solutions. <br /> Our team of experts is
          committed to delivering top-notch services tailored to your unique.
        </p>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate__animated animate__zoomIn  ${
            isZoomedIn ? "zoom-in" : ""
          }`}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Services;
