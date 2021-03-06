import styled from "styled-components";

export const TestimonialsSectionContainer = styled.div`
  @import url(https://fonts.googleapis.com/css?family=Lato);
  @import url(https://fonts.googleapis.com/css?family=Oswald);
  @import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css);
  display: flex;
  height: 700px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    min-height: 1500px;
    padding: 100px 0;
  }

  @media screen and (max-width: 1000px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1400px;
  }
`;

export const TestimonialsSectionWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  background: #010606;
  display: grid;
  z-index: 1;
  overflow: hidden;
  justify-content: center;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-areas:
      "firstarea firstarea secarea secarea"
      ". thirdarea thirdarea .";
    max-width: 800px;

    div:nth-child(2) {
      grid-area: secarea;
    }
    div:first-child {
      grid-area: firstarea;
    }
    div:last-child {
      grid-area: thirdarea;
    }

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-template-areas:
        "firstarea"
        "secarea"
        "thirdarea";
      div:nth-child(2) {
        grid-area: secarea;
      }
      div:first-child {
        grid-area: firstarea;
      }
      div:last-child {
        grid-area: thirdarea;
      }
      padding: 0 20px;
    }
  }
`;

export const TestimonialsSectionCard = styled.div`
  font-family: "Lato", Arial, sans-serif;
  position: relative;
  display: inline-block;
  margin: 10px;
  min-width: 250px;
  max-width: 350px;
  width: 100%;
  background-color: #010606;
  color: #ffffff;
  text-align: center;
  font-size: 16px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 30px 0px rgba(0, 254, 227, 0.67);
    -moz-box-shadow: 0px 0px 30px 0px rgba(0, 254, 227, 0.67);
    box-shadow: 0px 0px 30px 0px rgba(0, 254, 227, 0.67);
  }
  * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
`;

export const TestimonialsSectionIcon = styled.img`
  width: 100%;
  vertical-align: top;
  opacity: 0.6;
  height: 350px;
  object-fit: cover;
`;

export const TestimonialsSectionH1 = styled.h1`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const TestimonialsSectionP = styled.p``;

export const TestimonialsSectionCaption = styled.figcaption`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 80px 10% 15%;
  &::before {
    font-family: "FontAwesome";
    position: absolute;
    font-size: 170px;
    opacity: 0.35;
    font-style: normal;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    top: 0px;
    left: 50%;
  }
`;

export const TestimonialsSectionBlockQuote = styled.blockquote`
  padding: 0;
  margin: 0;
  font-style: italic;
  font-size: 1.2rem;
`;

export const TestimonialsSectionH3 = styled.h3`
  font-family: "Oswald";
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 400;
  line-height: 24px;
  margin: 3px 0;
`;

export const TestimonialsSectionH5 = styled.h3`
  font-weight: 400;
  margin: 0;
  text-transform: uppercase;
  color: #bbb;
  letter-spacing: 1px;
  font-size: 1.5rem;
`;
