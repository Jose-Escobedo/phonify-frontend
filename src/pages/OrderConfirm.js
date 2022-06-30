import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Link as LinkR } from "react-router-dom";

const OrderConfirm = () => {
  const logo = require("../images/logo.svg").default;
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }, []);
  return (
    <>
      <OrderConfirmContainer>
        <OrderConfirmNav to="/">
          <OrderConfirmLogo src={logo} />
        </OrderConfirmNav>
        <OrderConfirmMain>
          <OrderConfirmH1>Thank you for shopping with us!</OrderConfirmH1>
        </OrderConfirmMain>
      </OrderConfirmContainer>
    </>
  );
};

const OrderConfirmContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  z-index: -99;
`;

const OrderConfirmNav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 80px;
  background: black;
`;

const OrderConfirmLogo = styled.img`
  width: 200px;
  height: 80px;
  display: block;
  padding: 10px 0;
`;

const OrderConfirmMain = styled.div`
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

const OrderConfirmH1 = styled.h1`
  font-size: 2.5rem;
  color: white;
  margin: 64px 10px;
  font-family: "Montserrat", sans-serif;

  @media screen and (max-width: 750px) {
    font-size: 1.8rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

export default OrderConfirm;
