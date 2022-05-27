import React from "react";
import { PhonesH2, PhonesCard, PhonesIcon, PhonesP } from "./CartElements";

const CartItem = ({ cartItem, handlePhoneClick }) => {
  return (
    <PhonesCard onClick={handlePhoneClick}>
      <PhonesIcon src={cartItem.image} alt={cartItem.name} />
      <PhonesH2>{`${cartItem.name} ($${cartItem.price})`}</PhonesH2>
      <PhonesP>{cartItem.desc}</PhonesP>
      <PhonesH2>10 Reviews</PhonesH2>
    </PhonesCard>
  );
};

export default CartItem;
