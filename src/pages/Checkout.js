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
            {/* <input
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
            <textarea
              rows="6"
              placeholder="MESSAGE"
              name="message"
              required
            ></textarea>
            <CheckoutButton
              id="submit"
              type="submit"
              value="SEND"
            >
            Submit Order
            </ChekcoutButton> */}
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
  min-height: calc(100vh - 80px);
  background: linear-gradient(#012529, black) padding-box;
`;

const CheckoutMainH1 = styled.h1`
  font-size: 2.8rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  color: white;
`;

const CheckoutForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Checkout;
