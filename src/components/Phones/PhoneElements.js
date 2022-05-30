import styled from "styled-components";

export const PhonesContainer = styled.div`
  display: flex;
  height: 1200px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: #010606;
  padding: 75px 0;

  @media screen and (max-width: 768px) {
    height: 2500px;
    padding: 75px 0;
  }

  @media screen and (max-width: 1000px) {
    height: 2500px;
  }

  @media screen and (max-width: 480px) {
    height: 2300px;
  }
`;

export const PhonesWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 2rem;
  z-index: 1;
  overflow: hidden;
  height: 2000px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    padding: 3px 26px;
    height: 2300px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 10px 26px;
    height: 2300px;
  }
`;

export const PhonesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: 400px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2s);
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 768px) {
    height: 270px;
    width: 90%;
    margin: auto;
  }
  @media screen and (max-width: 1000px) {
    height: 330px;
    width: 85%;
    margin: auto;
  }
  @media screen and (max-width: 480px) {
    height: 300px;
    width: 85%;
    margin: auto;
  }
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

export const PhonesIcon = styled.img`
  height: 170px;
  width: 160px;
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    height: 130px;
    width: 120px;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 1000px) {
    height: 100px;
    width: 90px;
    margin-bottom: 9px;
  }

  @media screen and (max-width: 480px) {
    height: 90px;
    width: 80px;
    margin-bottom: 8px;
  }
`;

export const PhonesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 650px) {
    font-size: 2rem;
  }
`;

export const PhonesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;

  @media screen and (max-width: 650px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const PhonesP = styled.p`
  font-size: 0.8rem;
  text-align: center;
  margin-bottom: 10px;

  @media screen and (max-width: 650px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const PhonesCartButton = styled.button`
  border-radius: 50px;
  background: #00cccc;
  white-space: nowrap;
  padding: 7px 18px;
  color: black;
  font-size: 13px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #00ffff;
    color: #010606;
  }
`;
