import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Services from "../components/Services";
import Phones from "../components/Phones/Phones";
import TestimonialsSection from "../components/TestimonialsSection/TestimonialsSection";
import { TestimonialsSectionData } from "../components/TestimonialsSection/TestimonialsSectionData";
import { aboutObj, signupObj } from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [phones, setPhones] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/phones")
      .then((res) => res.json())
      .then(setPhones);
  }, []);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...aboutObj} />
      <TestimonialsSection {...TestimonialsSectionData} />
      <Services />
      <Phones phones={phones} />
      <InfoSection {...signupObj} />
      <Footer />
    </>
  );
};

export default Home;
