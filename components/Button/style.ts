import Link from "next/link";
import styled, { css } from "styled-components";

interface IBaseButton {
  salad?: boolean;
  emerald?: boolean;
}

export const button = styled(Link)``;

export const baseButton = styled.a<IBaseButton>`
  font-size: 15px;
  color: #ffffff;
  font-weight: 700;
  //background-color: #1bb76e;
  padding: 7px 14px 10px 9px;
  height: 35px;
  border-radius: 3px;
  //margin-right: auto;
  display: flex;
  align-items: center;

  ${(props) =>
    props.salad &&
    css`
      background-color: #1bb76e;
    `}

  ${(props) =>
    props.emerald &&
    css`
      background-color: #6432f9;
    `}
`;
