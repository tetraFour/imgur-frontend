import styled from "styled-components";

export const formWrapper = styled.div`
  position: relative;
  max-width: 550px;
  width: 550px;
  margin: 0 auto;
`;

export const input = styled.input`
  background: hsla(0, 0%, 100%, 0.25);
  padding: 8px 35px 8px 10px;
  border-radius: 3px;
  border: none;
  width: 100%;
  outline: 0 none;
  opacity: 0.8;
  max-height: 36px;
  font-family: Proxima Nova Regular, Helvetica Neue, Helvetica, Arial,
    sans-serif;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.4px;
  color: #fff;
  text-shadow: inherit;
  -webkit-text-fill-color: inherit;

  &::placeholder {
    font-family: inherit;
    color: #bbbbcd;
    font-weight: 100;
  }
`;

export const button = styled.button`
  position: absolute;
  font-size: 20px;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  background: transparent;
  color: #fff;
  border: 0;
  outline: 0 none;
  padding: 8px;
  cursor: pointer;
`;
