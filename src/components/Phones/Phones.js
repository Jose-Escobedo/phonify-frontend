import React from "react";
import PhoneCard from "./PhoneCard";
import { PhonesH1, PhonesContainer, PhonesWrapper } from "./PhoneElements";

const Phones = ({ phones, handlePhoneClick }) => {
  return (
    <PhonesContainer id="phone-card">
      <PhonesH1>Our Flagship Phones</PhonesH1>
      <PhonesWrapper>
        {phones.map((phone, index) => {
          return (
            <PhoneCard
              phone={phone}
              key={index}
              handlePhoneClick={handlePhoneClick}
            />
          );
        })}
      </PhonesWrapper>
    </PhonesContainer>
  );
};

export default Phones;
