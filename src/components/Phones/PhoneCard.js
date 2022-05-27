import React from "react";
import { PhonesH2, PhonesCard, PhonesIcon, PhonesP } from "./PhoneElements";

const PhoneCard = ({ phone, handlePhoneClick }) => {
  return (
    <PhonesCard onClick={() => handlePhoneClick(phone)}>
      <PhonesIcon src={phone.image} alt={phone.name} />
      <PhonesH2>{`${phone.name} ($${phone.price})`}</PhonesH2>
      <PhonesP>{phone.desc}</PhonesP>
      <PhonesH2>10 Reviews</PhonesH2>
    </PhonesCard>
  );
};

export default PhoneCard;
