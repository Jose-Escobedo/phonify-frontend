import React from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

const Checkout = () => {
  const logo = require("../images/logo.svg").default;

  return (
    <>
      <CheckoutContainer>
        <CheckoutNav to="/">
          <CheckoutLogo src={logo} />
        </CheckoutNav>
        <CheckoutMain>
          <CheckoutMainH1>Checkout</CheckoutMainH1>
          <CheckoutForm>
            <input
              type="text"
              id="name"
              placeholder="NAME"
              name="name"
              required
            />
            <input
              type="email"
              id="email"
              placeholder="EMAIL"
              name="email"
              required
            />
            <input
              type="address"
              id="address"
              placeholder="ADDRESS"
              name="address"
              required
            />
            <PayMethod>
              <label for="pay-method">PAY METHOD:</label>
              <select id="pay-method" name="pay-method" required>
                <option selected disabled value="">
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
              name="delivery-instructions"
            ></textarea>
            <CheckoutButton id="submit" type="submit" value="SEND">
              Submit Order
            </CheckoutButton>
          </CheckoutForm>
        </CheckoutMain>
      </CheckoutContainer>
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

  input {
    width: 100%;
    background-color: transparent;
    color: white;
    border: 1px solid white;
    padding: 0.5em 0.5em;
    font-size: 1rem;
  }
  label {
    background-color: transparent;
    color: grey;
    border: 1px solid white;
    padding: 0.5em 0.5em;
    font-size: 1rem;
  }

  select {
    border: 1px solid white;
    border-left: none;
    background-color: transparent;
    color: grey;
  }

  option {
    color: black;
  }

  textarea {
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    min-height: 2rem;
    background-color: transparent;
    color: white;
    letter-spacing: 1px;
    border: 1px solid white;
    padding: 0.5em 0.5em;
    margin-bottom: 2em;
    font-size: 1rem;
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
`;
export default Checkout;
