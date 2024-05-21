// src/pages/Contact.tsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import backgroundImage from "../assets/KAbout.jpeg";

const Contact: React.FC = () => {
  return (
    <>
      <Navbar />
      <main
        className="p-4"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          minHeight: "80.6vh",
        }}
      >
        <ContactForm />
      </main>
      <Footer />
    </>
  );
};

export default Contact;
