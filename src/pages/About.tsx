import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import backgroundImage from "../assets/KAbout.jpeg";

const About: React.FC = () => {
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
        <h1 className="text-3xl font-bold text-center my-8">About Us</h1>
        <p className="text-center mb-4 text-1xl text-black font-bold">
          Krelbuzz Technologies is a leading IT service company specializing in
          mobile app development. <br /> Our dedicated team of experts is
          committed to delivering top-notch services tailored to your unique
          needs. <br />
          Whether you're looking to enhance your digital presence, streamline
          your operations, <br /> or revolutionize your industry with
          groundbreaking mobile apps, we've got you covered. <br /> Join us on a
          journey of innovation and transformation. <br /> Let's collaborate to
          unlock the full potential of your business and achieve remarkable
          results together. <br />
          Welcome to the future of technology with Krelbuzz Tech!"
        </p>
        {/* Animated contact button */}
        <div className="text-center">
          <Link
            to="/contact"
            className="bg-blue-600 text-white py-2 px-4 rounded-full inline-block uppercase tracking-wide font-semibold text-sm animate__animated animate__fadeInUp animate__delay-1s hover:bg-blue-700 hover:shadow-lg transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
