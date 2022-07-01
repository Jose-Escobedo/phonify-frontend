import Home from "./pages/Home";
import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Orders from "./pages/Orders";
import Checkout from "./pages/Checkout";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import React, { useEffect, useState, useParams } from "react";
import "./App.css";
import OrderConfirm from "./pages/OrderConfirm";

function App({}) {
  const [isOpen, setIsOpen] = useState(false);
  const [phones, setPhones] = useState([]);
  const [user, setUser] = useState(null);
  const [cartPhones, setCartPhones] = useState([]);
  const [cartItems, setCartItems] = useState(cartPhones.length);

  console.log(cartPhones);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleQuantityAdd = (phone) => {
    const cartPhonesExist = cartPhones.find((item) => item.id === phone.id);

    if (cartPhonesExist) {
      fetch(`https://phonify-app.herokuapp.com/cart_items/add`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ phone_id: phone.id }),
      })
        .then((res) => res.json())
        .then(
          setCartPhones(
            cartPhones.map((item) =>
              item.id === phone.id
                ? {
                    ...cartPhonesExist,
                    quantity: cartPhonesExist.quantity + 1,
                  }
                : item
            )
          )
        );
    } else {
      fetch(`https://phonify-app.herokuapp.com/cart_items`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ phone_id: phone.id }),
      })
        .then((res) => res.json())
        .then(setCartPhones([...cartPhones, { ...phone, quantity: 1 }]));
    }
  };

  function handleQuantityReduce(phone) {
    const exist = cartPhones.find((item) => item.id === phone.id);
    if (exist.quantity === 1) {
      fetch(`https://phonify-app.herokuapp.com/cart_items/reduce`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ phone_id: phone.id }),
      })
        .then((res) => res.json())
        .then(setCartPhones(cartPhones.filter((item) => item.id !== phone.id)));
    } else {
      fetch(`https://phonify-app.herokuapp.com/cart_items/reduce`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ phone_id: phone.id }),
      })
        .then((res) => res.json())
        .then(
          setCartPhones(
            cartPhones.map((item) =>
              item.id === phone.id
                ? { ...exist, quantity: exist.quantity - 1 }
                : item
            )
          )
        );
    }
  }

  const addNewFormData = (e) => {
    fetch("https://phonify-app.herokuapp.com/orders", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(e),
    })
      .then((res) => res.json())
      .then(setCartPhones);
  };

  useEffect(() => {
    fetch("https://phonify-app.herokuapp.com/Cart", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then(setCartPhones);
  }, [cartPhones.length]);

  useEffect(() => {
    // fetch("https://phonify-app.herokuapp.com/Cart", {
    //   method: "GET",
    //   credentials: "include",
    // })
    //   .then((res) => res.json())
    //   .then(setCartPhones);

    fetch("https://phonify-app.herokuapp.com/phones")
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
              phones={phones}
              isOpen={isOpen}
              handleQuantityAdd={handleQuantityAdd}
              cartPhones={cartPhones}
              cartBadge={cartPhones.length}
              setCartItems={setCartItems}
            />
          }
        />
        <Route
          exact
          path="/Cart"
          element={
            <Cart
              handleQuantityAdd={handleQuantityAdd}
              handleQuantityReduce={handleQuantityReduce}
              cartPhones={cartPhones}
              setCartPhones={setCartPhones}
              cartItems={cartItems}
            />
          }
        />
        <Route
          exact
          path="/checkout"
          element={
            <Checkout
              addNewFormData={addNewFormData}
              cartPhones={cartPhones}
              cartItems={cartItems}
              setCartItems={setCartItems}
              setCartPhones={setCartPhones}
            />
          }
        />
        <Route exact path="/orderconfirm" element={<OrderConfirm />} />
      </Routes>
    </>
  );
}

export default App;
