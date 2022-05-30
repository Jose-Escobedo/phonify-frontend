import React from "react";
import {
  CartH2,
  PhonesCard,
  PhonesIcon,
  CartUpdateButton,
  CartUpdateButtonWrapper,
  CartQuantity,
} from "./CartElements";

const CartItem = ({ cartItem, handlePhoneAdd, handlePhoneRemove }) => {
  return (
    <PhonesCard>
      <PhonesIcon src={cartItem.image} alt={cartItem.name} />
      <CartH2>{`${cartItem.name}`}</CartH2>
      <CartUpdateButtonWrapper>
        <CartUpdateButton onClick={() => handlePhoneAdd(cartItem)}>
          +
        </CartUpdateButton>
        <CartUpdateButton onClick={() => handlePhoneRemove(cartItem)}>
          -
        </CartUpdateButton>
      </CartUpdateButtonWrapper>
      <CartQuantity>
        {cartItem.qty} x ${cartItem.price.toFixed(2)}
      </CartQuantity>
    </PhonesCard>
  );
};

export default CartItem;
