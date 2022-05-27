import React from "react";
import CartItem from "./CartItem.js";
import { PhonesH1, CartContainer, CartPhonesWrapper } from "./CartElements";

const Cart = ({ cart, handlePhoneClick, cartIsOpen }) => {
  let lengthZero = true;
  if (cart.length === 0) {
    lengthZero = true;
  } else {
    lengthZero = false;
  }

  return (
    <CartContainer id="phone-card">
      <PhonesH1>Your Cart Items</PhonesH1>
      <CartPhonesWrapper>
        {lengthZero ? (
          <div>Your Cart is Empty</div>
        ) : (
          cart.map((cartItem, index) => {
            return (
              <CartItem
                handlePhoneClick={handlePhoneClick}
                cartItem={cartItem}
                key={index}
              />
            );
          })
        )}
      </CartPhonesWrapper>
    </CartContainer>
  );
};

export default Cart;
