import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
export const CartandNav = styled.div`
  display: flex;
  height: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
  padding: 0;
  background: black;

  @media screen and (max-width: 768px) {
    height: 2500px;
    padding: 75px 0;
  }

  @media screen and (max-width: 1000px) {
    height: 2500px;
  }

  @media screen and (max-width: 480px) {
    height: 2200px;
  }
`;
export const CartContainer = styled.div`
  display: flex;
  height: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
  background: white;
`;

export const CartPhonesWrapper = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 2rem;
  z-index: 1;
  overflow: hidden;
  height: auto;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 24px 24px;
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
  background: #010106;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: 370px;
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
    height: 250px;
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

export const CartH1 = styled.h1`
  font-size: 2.5rem;
  color: #010106;
  margin: 64px 10px;

  @media screen and (max-width: 650px) {
    font-size: 2rem;
  }
`;

export const CartH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 15px;
  color: white;

  @media screen and (max-width: 650px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const CartEmpty = styled.div`
  color: #010106;
  font-size: 1.5rem;
  margin-bottom: 15px;

  @media screen and (max-width: 650px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const CartUpdateButton = styled.button`
  border-radius: 30px;
  background: #00ffff;
  white-space: nowrap;
  padding: 3px 8px;
  color: #010606;
  height: 30px;
  width: 30px;
  margin-left: 5px;
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: bolder;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #00cccc;
    color: white;
  }
`;

export const CartQuantity = styled.h3`
  color: white;
`;

export const CartUpdateButtonWrapper = styled.div`
  display: flex;
`;

export const CartLogo = styled.img`
  width: 200px;
  height: 80px;
  padding: 10px 0;
`;

export const CartSummary = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  color: black;
  height: 160px;
  justify-content: center;
`;

export const CartSummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CheckoutButton = styled.nav`
  display: flex;
  align-items: center;
  height: 130px;
  margin: auto;
`;

export const CheckoutBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #010606;
  white-space: nowrap;
  padding: 10px 100px;
  color: white;
  font-size: 16px;
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

export const CartSummaryColumn1 = styled.div`
  font-size: 1.5rem;
`;
export const CartSummaryColumn2 = styled.div`
  font-size: 1.5rem;
`;
