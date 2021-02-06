import styled, { css } from "styled-components";

import { spinnerAnimation } from "../../../styles/animation";

interface IValidationProps {
  valid: boolean;
}

export const formWrapper = styled.div`
  position: relative;
  border: 1px solid #585d6a;
  box-sizing: border-box;
  border-radius: 6px;
  margin-top: 33px;
`;

export const form = styled.form``;

export const commentAreaWrapper = styled.div`
  min-height: 90px;
  background-color: #33353b;
  padding: 12px;
  border-radius: 6px 6px 0 0;

  &:hover {
    background: linear-gradient(
        0deg,
        hsla(0, 0%, 100%, 0.02),
        hsla(0, 0%, 100%, 0.02)
      ),
      #33353b;
  }
`;

export const commentArea = styled.textarea<IValidationProps>`
  border: none;
  outline: none;
  resize: none;
  background-color: transparent;
  height: 72px;
  color: #fff;
  font-family: Proxima Nova Regular, Helvetica Neue, Helvetica, Arial,
    sans-serif;
  width: 100%;
  font-size: 100%;
  padding: 0;

  &::placeholder {
    color: #aaafb8;
  }

  ${(props) =>
    !props.valid &&
    css`
      color: #fe6065;
    `}
`;

export const SubmitWrapper = styled.div`
  padding: 9px 16px;
  display: flex;
  align-items: center;
`;

export const LinkToRules = styled.a`
  font-size: 12px;
  line-height: 12px;
  color: #b4b9c2;
  &:hover,
  &:focus {
    color: #01b96b;
    outline: none;
  }
`;

export const SymbolCounter = styled.span<IValidationProps>`
  margin-right: 20px;
  width: 18px;
  font-size: 12px;
  line-height: 12px;
  color: #b4b9c2;
  margin-left: auto;

  ${(props) =>
    !props.valid &&
    css`
      color: #fe6065;
    `}
`;
export const SubmitBtn = styled.button`
  width: 61px;
  height: 26px;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.12);
  border-radius: 3px;
  border: none;
  font-size: 14px;
  line-height: 14px;
  color: #fff;
  text-transform: capitalize;
  text-align: center;
  background-color: #1bb76e;
  outline-style: none;
  cursor: pointer;
  font-family: Proxima Nova ExtraBold, Helvetica Neue, Helvetica, Arial,
    sans-serif;

  &:disabled {
    color: #b4b9c2;
    background: #464b57;
    cursor: default;
  }
`;

export const spinner = styled.div`
  display: inline-block;
  width: 15px;
  height: 15px;
  vertical-align: text-bottom;
  border: 3px solid;
  border-right: 0.25em solid transparent;
  border-radius: 50%;
  animation: ${spinnerAnimation} 0.7s linear infinite;
`;
