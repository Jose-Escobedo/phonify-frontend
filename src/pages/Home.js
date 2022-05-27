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
import Cart from "../components/Cart/Cart";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [phones, setPhones] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleCart = () => {
    setCartIsOpen(!cartIsOpen);
  };

  function handlePhoneClick(id, cart) {
    phones.map((item) => (id === item.id ? { ...item, isCart: cart } : item));
    setCartCount(cartCount + 1);
  }

  useEffect(() => {
    fetch("http://localhost:3000/phones")
      .then((res) => res.json())
      .then(setPhones);
  }, []);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar
        toggle={toggle}
        cartCount={cartCount}
        setCartIsOpen={setCartIsOpen}
        toggleCart={toggleCart}
      />
      {/* <Cart
        cartIsOpen={cartIsOpen}
        toggleCart={toggleCart}
        phones={phones.filter((item) => item.isCart)}
        handlePhoneClick={(id) => handlePhoneClick(id, false)}
      /> */}
      <HeroSection />
      <InfoSection {...aboutObj} />
      <TestimonialsSection {...TestimonialsSectionData} />
      <Services />
      <Phones
        phones={phones}
        cart={cart}
        handlePhoneClick={handlePhoneClick}
        cartCount={cartCount}
        setCart={setCart}
      />
      <InfoSection {...signupObj} />
      <Footer />
    </>
  );
};

export default Home;
