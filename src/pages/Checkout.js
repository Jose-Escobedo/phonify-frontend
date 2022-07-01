import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Checkout = ({ addNewFormData, cartPhones, setCartPhones, cartItems }) => {
  const logo = require("../images/logo.svg").default;

  const itemsPrice = cartPhones.reduce(
    (sum, p) => sum + p.price * p.quantity,
    0
  );
  const taxPrice = itemsPrice * 0.095;
  const shippingPrice = itemsPrice > 1200 ? 0 : 25;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  const [navigateToggle, setNavigateToggle] = useState(false);

  const blankForm = {
    name: "",
    email: "",
    address: "",
    pay_method: "",
    delivery_instructions: "",
    total: totalPrice.toFixed(2),
  };

  const [newFormData, setFormData] = useState(blankForm);
  const { name, email, address, delivery_instructions, pay_method, total } =
    newFormData;

  function handleNameChange(e) {
    setFormData({
      ...newFormData,
      name: e.target.value,
    });
    console.log(newFormData);
  }

  function handleEmailChange(e) {
    setFormData({
      ...newFormData,
      email: e.target.value,
    });
    console.log(newFormData);
  }

  function handleAddressChange(e) {
    setFormData({
      ...newFormData,
      address: e.target.value,
    });
    console.log(newFormData);
  }

  function handleDevliveryInstructionsChange(e) {
    setFormData({
      ...newFormData,
      delivery_instructions: e.target.value,
    });
    console.log(newFormData);
  }

  function handlePayChange(e) {
    setFormData({
      ...newFormData,
      pay_method: e.target.value,
    });
    console.log(newFormData);
  }

  const handleForm = (e) => {
    e.preventDefault();
    addNewFormData(newFormData);
    setFormData(blankForm);
    setCartPhones([]);
    setNavigateToggle(!navigateToggle);
  };

  useEffect(() => {
    fetch("https://phonify-app.herokuapp.com/Cart", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then(setCartPhones);
  }, [cartPhones]);

  return (
    <>
      {navigateToggle ? (
        <Navigate to="/orderconfirm" />
      ) : (
        <CheckoutContainer>
          <CheckoutNav to="/">
            <CheckoutLogo src={logo} />
          </CheckoutNav>

          {cartPhones.length === 0 || cartPhones.length === null ? (
            <CheckoutMain>
              <CheckoutH1>Cart Is Empty</CheckoutH1>
            </CheckoutMain>
          ) : (
            <CheckoutMain>
              <CheckoutMainH1>Checkout</CheckoutMainH1>
              <CheckoutForm onSubmit={handleForm}>
                <input
                  type="text"
                  id="name"
                  placeholder="NAME"
                  name="name"
                  value={newFormData.name}
                  onChange={handleNameChange}
                  required
                />
                <input
                  type="email"
                  id="email"
                  placeholder="EMAIL"
                  name="email"
                  value={newFormData.email}
                  onChange={handleEmailChange}
                  required
                />
                <input
                  type="text"
                  id="address"
                  placeholder="ADDRESS"
                  name="address"
                  value={newFormData.address}
                  onChange={handleAddressChange}
                  required
                />
                <PayMethod>
                  <label htmlFor="pay_method">PAY METHOD:</label>
                  <select
                    id="pay_method"
                    name="pay_method"
                    value={newFormData.pay_method}
                    onChange={handlePayChange}
                    required
                  >
                    <option defaultValue disabled value="">
                      {" "}
                      -- select an option --{" "}
                    </option>
                    <option value="paypal">PAYPAL</option>
                    <option value="stripe">STRIPE</option>
                    <option value="visa">VISA</option>
                    <option value="mastercard">MASTERCARD</option>
                  </select>
                </PayMethod>

                <textarea
                  rows="6"
                  placeholder="DELIVERY INSTRUCTIONS"
                  name="delivery_instructions"
                  value={newFormData.delivery_instructions}
                  onChange={handleDevliveryInstructionsChange}
                ></textarea>
                <CheckoutButton id="submit" type="submit" value="SEND">
                  Submit Order
                </CheckoutButton>
              </CheckoutForm>
            </CheckoutMain>
          )}
        </CheckoutContainer>
      )}
    </>
  );
};

const CheckoutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  z-index: -99;
`;

const CheckoutH1 = styled.h1`
  font-size: 2.5rem;
  color: white;
  margin: 64px 10px;
  font-family: "Montserrat", sans-serif;

  @media screen and (max-width: 650px) {
    font-size: 2rem;
  }
`;

const CheckoutNav = styled(LinkR)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 80px;
  background: black;
`;

const CheckoutLogo = styled.img`
  width: 200px;
  height: 80px;
  display: block;
  padding: 10px 0;
`;

const CheckoutMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: red;
  width: 100%;
  padding-bottom: 0.7em;
  min-height: calc(100vh - 80px);
  max-height: calc(100vh - 80px);
  background: linear-gradient(#012529, black) padding-box;
`;

const CheckoutMainH1 = styled.h1`
  font-size: 2.8rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  color: white;
  padding-top: 0.7em;
`;

const PayMethod = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid white;
`;

const CheckoutForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 50vh;
  width: 40%;
  margin-top: 2em;

  @media screen and (max-width: 750px) {
    width: 60%;
  }

  input {
    width: 100%;
    background-color: transparent;
    color: white;
    border: 1px solid white;
    padding: 0.5em 0.5em;
    font-size: 1rem;
    @media screen and (max-width: 545px) {
      font-size: 0.8rem;
    }
  }
  label {
    background-color: transparent;
    color: grey;
    border: 1px solid white;
    padding: 0.5em 0.5em;
    font-size: 1rem;
    @media screen and (max-width: 750px) {
      max-width: 50%;
    }
    @media screen and (max-width: 545px) {
      font-size: 0.8rem;
    }
  }

  select {
    border: 1px solid white;
    border-left: none;
    background-color: transparent;
    color: grey;
    @media screen and (max-width: 750px) {
      max-width: 50%;
    }
    @media screen and (max-width: 545px) {
      font-size: 0.8rem;
    }
    @media screen and (max-width: 525px) {
      font-size: 0.6rem;
    }
  }

  option {
    color: black;
  }

  textarea {
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    min-height: 2.1rem;
    background-color: transparent;
    color: white;
    letter-spacing: 1px;
    border: 1px solid white;
    padding: 0.5em 0.5em;
    margin-bottom: 2em;
    font-size: 1rem;
    @media screen and (max-width: 545px) {
      font-size: 0.8rem;
    }
  }
`;

const CheckoutButton = styled.button`
  border-radius: 50px;
  background: #00ffff;
  white-space: nowrap;
  padding: 1em 2em;
  color: black;
  font-size: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: white;
    color: black;
  }

  @media screen and (max-width: 750px) {
    font-size: 0.8rem;
    padding: 0.8em 1.8em;
  }
`;
export default Checkout;
