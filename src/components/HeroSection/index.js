import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import { Button } from "../HeroSection/HeroElements";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Mobile Phone Shopping Made Easy</HeroH1>
        <HeroP>
          Buy a phone today and receive a $50 credit towards your next payment.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            primary="true"
            dark="true"
            to="phone-card"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            smooth={"true"}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Pick a phone {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
