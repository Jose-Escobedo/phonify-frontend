import styled from "styled-components";

export const ServicesContainer = styled.div`
  display: flex;
  height: 700px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  padding: 75px 0;
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
  background: black;

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
  background: #fff;
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
  }
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
