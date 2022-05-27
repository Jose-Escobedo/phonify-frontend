import React from "react";
import CartItem from "./CartItem.js";
import { PhonesH1, CartContainer, CartPhonesWrapper } from "./CartElements";

const Cart = ({ cart }) => {
  return (
    <CartContainer id="phone-card">
      <PhonesH1>Your Cart Items</PhonesH1>
      <CartPhonesWrapper>
        {cart.map((cartItem, index) => {
          return <CartItem cartItem={cartItem} key={index} />;
        })}
      </CartPhonesWrapper>
    </CartContainer>
  );
};

export default Cart;
