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

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  function handlePhoneAdd(phone) {
    const exist = cart.find((item) => item.id === phone.id);
    console.log(phone);
    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === phone.id
            ? { ...exist, quantity: exist.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...phone, quantity: 1 }]);
    }
  }

  function handlePhoneRemove(phone) {
    const exist = cart.find((item) => item.id === phone.id);
    if (exist.quantity === 1) {
      setCart(cart.filter((item) => item.id !== phone.id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === phone.id
            ? { ...exist, quantity: exist.quantity - 1 }
            : item
        )
      );
    }
    console.log(cart);
  }

  function cartContent(cart) {
    console.log(cart);
    setCart(cart);
  }

  // useEffect(() => {
  //   fetch(`http://localhost:3000/Cart`)
  //     .then((res) => res.json())
  //     .then(cartContent);
  // }, []);

  useEffect(() => {
    fetch("http://localhost:3000/authorized_user").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setIsAuthenticated(true);
          setUser(user);
        });
      }
    });
    fetch("http://localhost:3000/phones")
      .then((res) => res.json())
      .then(setPhones);
  }, []);

  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              toggle={toggle}
              setCart={setCart}
              phones={phones}
              isOpen={isOpen}
              cart={cart}
              handlePhoneAdd={handlePhoneAdd}
              setUser={setUser}
              setIsAuthenticated={setIsAuthenticated}
              user={user}
            />
          }
        />
        <Route
          exact
          path="/Login"
          element={
            <Login
              setUser={setUser}
              setIsAuthenticated={setIsAuthenticated}
              user={user}
            />
          }
        />
        <Route
          exact
          path="/Signup"
          element={
            <Signup
              setUser={setUser}
              setIsAuthenticated={setIsAuthenticated}
              user={user}
            />
          }
        />
        <Route
          exact
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

// function handlePhoneAdd(phone) {
//   const exist = cart.find((item) => item.id === phone.id);
//   console.log(phone);
//   if (exist) {
//     fetch(`http://localhost:3000/Cart/add_quantity/${phone.id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ quantity: exist.quantity + 1 }),
//     })
//       .then((res) => res.json())
//       .then(
//         setCart(
//           cart.map((item) =>
//             item.id === phone.id
//               ? { ...exist, quantity: exist.quantity + 1 }
//               : item
//           )
//         )
//       );
//   } else {
//     fetch(`http://localhost:3000/Cart/add_to_cart/${phone.id}`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ quantity: 1 }),
//     })
//       .then((res) => res.json())
//       .then(setCart([...cart, { ...phone, quantity: 1 }]));
//   }
// }
