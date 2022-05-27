import styled from "styled-components";

export const ServicesContainer = styled.div`
  display: flex;
  height: 700px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;

  @media screen and (max-width: 768px) {
    height: 1100px;
    padding: 75px 0;
  }

  @media screen and (max-width: 480px) {
    height: 1100px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  background: white;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-areas:
      "firstarea firstarea secarea secarea"
      ". thirdarea thirdarea .";

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
    }
  }
`;

export const ServicesCard = styled.div`
  background: #010606;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 260px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2s);
  transition: all 0.2s ease-in-out;

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

    * {
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }
  }
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: black;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  color: white;
`;

export const ServicesP = styled.p`
  font-size: 0.85rem;
  text-align: center;
  color: white;
`;
