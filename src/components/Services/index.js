import React from "react";
import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-2.svg";
import Icon3 from "../../images/svg-3.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Reduce Cost</ServicesH2>
          <ServicesP>We help reduce fees and shipping times.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Phone Repair</ServicesH2>
          <ServicesP>
            Mistakes happen. That is why we offer deals on phone repairs.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Phone Insurance</ServicesH2>
          <ServicesP>All of our phones come with Insurance.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
