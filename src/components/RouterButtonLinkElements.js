import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const RouterBtn = styled.nav`
  display: flex;
  align-items: center;
`;

export const RouterBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #010606;
  white-space: nowrap;
  padding: 10px 22px;
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
