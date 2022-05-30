import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./components/Signup/Signup";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import React, { useEffect, useState } from "react";

import "./App.css";
function App({}) {
  const [isOpen, setIsOpen] = useState(false);
  const [phones, setPhones] = useState([]);
  const [cart, setCart] = useState([]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  function handlePhoneAdd(phone) {
    const exist = cart.find((item) => item.id === phone.id);
    console.log(phone);
    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === phone.id ? { ...exist, qty: exist.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...phone, qty: 1 }]);
    }
    console.log(cart);
  }

  function handlePhoneRemove(phone) {
    const exist = cart.find((item) => item.id === phone.id);
    if (exist.qty === 1) {
      setCart(cart.filter((item) => item.id !== phone.id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === phone.id ? { ...exist, qty: exist.qty - 1 } : item
        )
      );
    }
    console.log(cart);
  }

  useEffect(() => {
    fetch("http://localhost:3000/phones")
      .then((res) => res.json())
      .then(setPhones);
  }, []);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              toggle={toggle}
              setCart={setCart}
              phones={phones}
              isOpen={isOpen}
              cart={cart}
              handlePhoneAdd={handlePhoneAdd}
            />
          }
        />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route
          path="/Cart"
          element={
            <Cart
              cart={cart}
              handlePhoneAdd={handlePhoneAdd}
              handlePhoneRemove={handlePhoneRemove}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
