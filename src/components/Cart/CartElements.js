import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const CartNav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0;
  background: black;

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 1000px) {
  }

  @media screen and (max-width: 480px) {
  }
`;
export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
  min-height: calc(100vh - 80px);
  background: linear-gradient(#012529, black) padding-box;
`;

export const CartPhonesWrapper = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 2rem;
  flex-wrap: wrap;
  z-index: 1;
  width: 90%;
  padding: 1.5em 1.5em;
  justify-content: center;

  @media screen and (max-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const PhonesCard = styled.div`
  background: #010106;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #00ffff;
  min-height: 370px;
  padding: 2em 5em;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2s);
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 768px) {
    min-height: 270px;
    width: 90%;
    margin: auto;
  }
  @media screen and (max-width: 1000px) {
    min-height: 330px;
    min-width: 60%;
    margin: auto;
  }
  @media screen and (max-width: 480px) {
    min-height: 250px;
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
  color: white;
  margin: 64px 10px;
  font-family: "Montserrat", sans-serif;

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
  display: block;
  padding: 10px 0;
`;

export const CartSummary = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  color: white;
  justify-content: center;
  align-items: center;
  margin: 3em 0;
  padding: 3em 2em;
`;

export const CartSummaryRow = styled.div`
  display: flex;
  width: 100%;
  padding: 0.5em 25em;
  justify-content: space-between;
  @media screen and (max-width: 1400px) {
    padding: 0.5rem 15em;
  }
  @media screen and (max-width: 1000px) {
    padding: 0.5em 10em;
  }
  @media screen and (max-width: 768px) {
    padding: 0.5em 5em;
  }
  @media screen and (max-width: 600px) {
    padding: 0.5em 2.5em;
  }
  @media screen and (max-width: 480px) {
    padding: 0.5em 1.25em;
  }
`;

export const CheckoutButton = styled.nav`
  display: flex;
  align-items: center;
  min-height: 100px;
  justify-content: center;
  margin: auto;
`;

export const CheckoutBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: white;
  white-space: nowrap;
  padding: 0.5em 3em;
  color: black;
  font-size: 1.2rem;
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

  @media screen and (max-width: 1000px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 1.2rem;
  vertical-align: middle;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 1.2rem;
  vertical-align: middle;
`;

export const CartSummaryColumn1 = styled.div`
  font-size: 1.5rem;
  border-bottom: 1px solid #00ffff;
  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;
export const CartSummaryColumn2 = styled.div`
  font-size: 1.5rem;
  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;
