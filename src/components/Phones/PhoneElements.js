import styled from "styled-components";

export const PhonesContainer = styled.div`
  display: flex;
  height: 1000px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: #010106;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const PhonesWrapper = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 2rem;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
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

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const PhonesIcon = styled.img`
  height: 170px;
  width: 160px;
  margin-bottom: 10px;
`;

export const PhonesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const PhonesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const PhonesP = styled.p`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 10px;
`;
