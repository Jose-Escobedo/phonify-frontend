import Home from "./pages/Home";
import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Orders from "./pages/Orders";
import Checkout from "./pages/Checkout";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import React, { useEffect, useState, useParams } from "react";
import "./App.css";

function App({}) {
  const [isOpen, setIsOpen] = useState(false);
  const [phones, setPhones] = useState([]);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [cartPhones, setCartPhones] = useState(["1", "2"]);

  console.log(cartPhones);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleQuantityAdd = (phone) => {
    const cartPhonesExist = cartPhones.find((item) => item.id === phone.id);

    if (cartPhonesExist) {
      fetch(`http://localhost:3000/cart_items/add`, {
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
      fetch(`http://localhost:3000/cart_items`, {
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
      fetch(`http://localhost:3000/cart_items/reduce`, {
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
      fetch(`http://localhost:3000/cart_items/reduce`, {
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
    fetch("http://localhost:3000/orders", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(e),
    })
      .then((res) => res.json())
      .then(console.log("success"));
    // setCart([...Cart, e])
  };

  useEffect(() => {
    fetch("http://localhost:3000/Cart", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then(setCartPhones);

    // fetch("http://localhost:3000/authorized_user").then((res) => {
    //   if (res.ok) {
    //     res.json().then((user) => {
    //       setIsAuthenticated(true);
    //       setUser(user);
    //     });
    //   }
    // });

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
              phones={phones}
              isOpen={isOpen}
              handleQuantityAdd={handleQuantityAdd}
              cartPhones={cartPhones}
              // setUser={setUser}
              // setIsAuthenticated={setIsAuthenticated}
              // user={user}
              cartBadge={cartPhones.length}
            />
          }
        />
        {/* <Route
          exact
          path="/Login"
          element={
            <Login
              setUser={setUser}
              setIsAuthenticated={setIsAuthenticated}
              user={user}
            />
          }
        /> */}
        {/* <Route
          exact
          path="/Signup"
          element={
            <Signup
              setUser={setUser}
              setIsAuthenticated={setIsAuthenticated}
              user={user}
            />
          }
        /> */}
        <Route
          exact
          path="/Cart"
          element={
            <Cart
              handleQuantityAdd={handleQuantityAdd}
              handleQuantityReduce={handleQuantityReduce}
              cartPhones={cartPhones}
              setCartPhones={setCartPhones}
            />
          }
        />
        <Route
          exact
          path="/checkout"
          element={
            <Checkout addNewFormData={addNewFormData} cartPhones={cartPhones} />
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
