import React from "react";
import {
  PhonesH2,
  PhonesCard,
  PhonesIcon,
  PhonesP,
  PhonesCartButton,
} from "./PhoneElements";

const PhoneCard = ({ phone, handlePhoneAdd }) => {
  return (
    <PhonesCard>
      <PhonesIcon src={phone.image} alt={phone.name} />
      <PhonesH2>{`${phone.name} ($${phone.price})`}</PhonesH2>
      <PhonesH2>10 Reviews</PhonesH2>
      <PhonesP>{phone.desc}</PhonesP>
      <PhonesCartButton onClick={() => handlePhoneAdd(phone)}>
        Add To Cart
      </PhonesCartButton>
    </PhonesCard>
  );
};

export default PhoneCard;
