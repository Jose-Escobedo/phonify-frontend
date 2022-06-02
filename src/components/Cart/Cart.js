import React from "react";
import CartItem from "./CartItem.js";
import { NavLogo, NavImg } from "../Navbar/NavbarElements.js";
import {
  CartH1,
  CartContainer,
  CartPhonesWrapper,
  CartEmpty,
  CartH2,
  CartSummary,
  CartSummaryRow,
  CartSummaryColumn1,
  CartSummaryColumn2,
  CartandNav,
  CartLogo,
  CheckoutButton,
  CheckoutBtnLink,
} from "./CartElements";

const Cart = ({ cart, handlePhoneAdd, handlePhoneRemove, toggleHome }) => {
  const logo = require("../../images/logo.svg").default;
  console.log("inside cart component");
  console.log(cart);
  const itemsPrice = cart.reduce((a, c) => a + c.price * c.quantity, 0);
  const taxPrice = itemsPrice * 0.095;
  const shippingPrice = itemsPrice > 1200 ? 0 : 25;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  console.log(itemsPrice, taxPrice, shippingPrice, totalPrice);
  return (
    <CartandNav>
      <NavLogo to="/">
        <CartLogo src={logo} />
      </NavLogo>
      <CartContainer id="phone-card">
        <CartH1>Your Cart Items</CartH1>
        <CartEmpty>{cart.length === 0 && <div>Cart Is Empty</div>}</CartEmpty>
        <CartPhonesWrapper>
          {cart.map((cartItem, index) => {
            return (
              <CartItem
                handlePhoneAdd={handlePhoneAdd}
                handlePhoneRemove={handlePhoneRemove}
                cartItem={cartItem}
                key={cartItem.id}
              />
            );
          })}
        </CartPhonesWrapper>
        {cart.length !== 0 && (
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
    </CartandNav>
  );
};

export default Cart;
