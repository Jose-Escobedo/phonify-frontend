import React from "react";
import { ScrollBtn, ScrollBtnLink } from "../ButtonElements";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  imgStart,
  topLine,
  headline,
  lightText,
  darkText,
  img,
  alt,
  description,
  id,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine darkText={darkText}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <ScrollBtn>
                  <ScrollBtnLink
                    to="phone-card"
                    smooth={"true"}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    Buy Now
                  </ScrollBtnLink>
                </ScrollBtn>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
