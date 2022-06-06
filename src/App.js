import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./components/Signup/Signup";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import React, { useEffect, useState, useParams } from "react";

import "./App.css";
import { CartQuantity } from "./components/Cart/CartElements";
function App({}) {
  const [isOpen, setIsOpen] = useState(false);
  const [phones, setPhones] = useState([]);
  const [cartQuantity, setCartQuantity] = useState([]);
  // const { Cart } = useParams();
  const [cartInfo, setCartInfo] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [cartPhones, setCartPhones] = useState(["1", "2"]);

  const phoneInfo = cartPhones[Object.keys(cartPhones)[0]];

  console.log(cartPhones);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleQuantityAdd = (phone) => {
    const cartQuantityExist = cartPhones[Object.keys(cartPhones)[1]].find(
      (item) => item.phone_id === phone.id
    );
    const cartPhonesExist = cartPhones[Object.keys(cartPhones)[0]].find(
      (item) => item.phone_id === phone.id
    );

    if (cartQuantityExist) {
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
            cartQuantity.map((item) =>
              item.phone_id === phone.id
                ? {
                    ...cartQuantityExist,
                    quantity: cartQuantityExist.quantity + 1,
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
        .then(
          setCartPhones({
            cart_phones: [
              cartPhones[Object.keys(cartPhones)[0]].map((item) =>
                item.phone_id === phone.id ? { ...cartPhonesExist, item } : item
              ),
            ],

            cart_quantity: [cartPhones[Object.keys(cartPhones)[1]]],
          })
        );

      // .then(
      //   setCartPhones(
      //     cartPhones.map((item) =>
      //       item.phone_id === phone.id ? [...cartPhones, item] : item
      //     )
      //   )
      // );
    }
  };

  // function handleQuantityReduce(phone) {
  //   const exist = cartQuantity.find((item) => item.id === phone.id);
  //   if (exist.quantity === 1) {
  //     fetch(`http://localhost:3000/cart_items/reduce`, {
  //       method: "POST",
  //       credentials: "include",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },

  //       body: JSON.stringify({ phone_id: phone.id }),
  //     })
  //       .then((res) => res.json())
  //       .then(setCartPhones(cartPhones.filter((item) => item.id !== phone.id)));
  //   } else {
  //     fetch(`http://localhost:3000/cart_items/reduce`, {
  //       method: "POST",
  //       credentials: "include",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },

  //       body: JSON.stringify({ phone_id: phone.id }),
  //     })
  //       .then((res) => res.json())
  //       .then(
  //         setCartQuantity(
  //           cartQuantity.map((item) =>
  //             item.id === phone.id
  //               ? { ...exist, quantity: exist.quantity - 1 }
  //               : item
  //           )
  //         )
  //       );
  //   }
  // }

  useEffect(() => {
    fetch("http://localhost:3000/Cart", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then(setCartPhones);

    fetch("http://localhost:3000/authorized_user").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setIsAuthenticated(true);
          setUser(user);
        });
      }
    });

    // fetch(`http://localhost:3000/cart_items`, {
    //   method: "POST",
    //   credentials: "include",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },

    //   body: JSON.stringify({ phone_id: 2 }),
    // });

    // fetch(`http://localhost:3000/cart_items/add`, {
    //   method: "POST",
    //   credentials: "include",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },

    //   body: JSON.stringify({ phone_id: 1 }),
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
              cartPhones={cartPhones}
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
              handleQuantityAdd={handleQuantityAdd}
              // handleQuantityReduce={handleQuantityReduce}
              // setCartQuantity={setCartQuantity}
              cartPhones={cartPhones}
              setCartPhones={setCartPhones}
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
