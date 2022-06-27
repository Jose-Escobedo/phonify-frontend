import React, { useEffect, useState } from "react";
import CartItem from "../components/Cart/CartItem.js";
import { NavLogo, NavImg } from "../components/Navbar/NavbarElements.js";
import {
  CartH1,
  CartContainer,
  CartPhonesWrapper,
  CartSummary,
  CartSummaryRow,
  CartSummaryColumn1,
  CartSummaryColumn2,
  CartNav,
  CartLogo,
  CheckoutButton,
  CheckoutBtnLink,
} from "../components/Cart/CartElements";

const Cart = ({
  handleQuantityAdd,
  handleQuantityReduce,
  cartPhones,
  setCartPhones,
}) => {
  const logo = require("../images/logo.svg").default;
  const itemsPrice = cartPhones.reduce(
    (sum, p) => sum + p.price * p.quantity,
    0
  );
  const taxPrice = itemsPrice * 0.095;
  const shippingPrice = itemsPrice > 1200 ? 0 : 25;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <>
      <CartNav>
        <NavLogo to="/">
          <CartLogo src={logo} />
        </NavLogo>
      </CartNav>
      <CartContainer id="phone-card">
        <CartH1>
          {cartPhones.length === 0 ? "Cart Is Empty" : "Your Cart Items"}
        </CartH1>
        <CartPhonesWrapper>
          {cartPhones.map((item, index) => {
            return (
              <CartItem
                handleQuantityAdd={handleQuantityAdd}
                handleQuantityReduce={handleQuantityReduce}
                cartItem={item}
                cartPhones={cartPhones}
                key={item.id}
              />
            );
          })}
        </CartPhonesWrapper>
        {cartPhones.length !== 0 && (
          <>
            <CartSummary>
              <CartSummaryRow>
                <CartSummaryColumn1>Subtotal Price</CartSummaryColumn1>
                <CartSummaryColumn2>
                  ${itemsPrice.toFixed(2)}
                </CartSummaryColumn2>
              </CartSummaryRow>
              <CartSummaryRow>
                <CartSummaryColumn1>Tax Price</CartSummaryColumn1>
                <CartSummaryColumn2>${taxPrice.toFixed(2)}</CartSummaryColumn2>
              </CartSummaryRow>
              <CartSummaryRow>
                <CartSummaryColumn1>Shipping Price</CartSummaryColumn1>
                <CartSummaryColumn2>
                  ${shippingPrice.toFixed(2)}
                </CartSummaryColumn2>
              </CartSummaryRow>
              <CartSummaryRow>
                <CartSummaryColumn1>Total Price</CartSummaryColumn1>
                <CartSummaryColumn2>
                  ${totalPrice.toFixed(2)}
                </CartSummaryColumn2>
              </CartSummaryRow>
            </CartSummary>
            <CheckoutButton>
              <CheckoutBtnLink to="/">Checkout</CheckoutBtnLink>
            </CheckoutButton>
          </>
        )}
      </CartContainer>
    </>
  );
};

export default Cart;
