import React from "react";
import {
  CartH2,
  PhonesCard,
  PhonesIcon,
  CartUpdateButton,
  CartUpdateButtonWrapper,
  CartQuantity,
} from "./CartElements";

const CartItem = ({
  cartItem,
  cartQuantity,
  handleQuantityAdd,
  handleQuantityReduce,
}) => {
  let newArray = [cartItem];
  let newArr = [cartQuantity];
  console.log(newArray);
  return (
    <PhonesCard>
      <PhonesIcon src={cartItem.image} alt={cartItem.name} />
      <CartH2>{`${cartItem.name}`}</CartH2>
      <CartUpdateButtonWrapper>
        <CartUpdateButton onClick={() => handleQuantityAdd(cartItem)}>
          +
        </CartUpdateButton>
        <CartUpdateButton onClick={() => handleQuantityReduce(cartItem)}>
          -
        </CartUpdateButton>
      </CartUpdateButtonWrapper>
      <CartQuantity>
        {cartItem.quantity} x ${cartItem.price.toFixed(2)}
      </CartQuantity>
    </PhonesCard>
  );
};

export default CartItem;
