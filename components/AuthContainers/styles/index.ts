import Link from "next/link";
import styled, { css } from "styled-components";

import ImgurLogotype from "../../../assets/images/logo.svg";

interface IOAuth {
  facebook?: boolean;
  apple?: boolean;
  vk?: boolean;
  twitter?: boolean;
  google?: boolean;
}

export const LinkToHomeWrapper = styled(Link)``;

export const LinkToHome = styled.a`
  margin-bottom: 90px;
  align-self: center;
`;

export const ImgurLogo = styled(ImgurLogotype)``;

export const AuthTitle = styled.p`
  font-size: 11px;
  letter-spacing: 0.03em;
  line-height: 28px;
  color: #fff;
  text-align: center;
`;
export const AuthTitleWithLines = styled(AuthTitle)`
  position: relative;

  &::before,
  &::after {
    content: "";
    background: url("/images/fading-section-break.png") no-repeat;
    opacity: 0.7;
    width: 129px;
    height: 3px;
    position: absolute;
  }
  &::before {
    top: 50%;
    left: 0;
  }

  &::after {
    top: calc(50% - 2px);
    right: 0;
    transform: rotate(180deg);
  }
`;

export const OAuthList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const OAuthListItem = styled.li``;

export const OAuthLink = styled.a<IOAuth>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  max-width: 86px;
  padding-top: 2px;
  width: 57px;
  height: 40px;
  transition: background-color 0.2s;
  border-bottom: 5px solid;
  border-radius: 5px;
  background: #212121;
  svg {
    fill: #ffffff;
    transition: all 0.2s;
  }

  ${(props) =>
    props.facebook &&
    css`
      border-bottom-color: #3a558e;
      &:hover {
        background: #3a558e;
      }
    `}
  ${(props) =>
    props.twitter &&
    css`
      border-bottom-color: #4099ff;
      &:hover {
        background: #4099ff;
      }
    `}
    ${(props) =>
    props.apple &&
    css`
      padding-top: 0;
      border-bottom-color: #ffffff;
      &:hover {
        background: #ffffff;
        svg {
          fill: #000000;
        }
      }
    `}
    ${(props) =>
    props.google &&
    css`
      border-bottom-color: #e94435;
      &:hover {
        background: #e94435;
      }
    `}
    ${(props) =>
    props.vk &&
    css`
      border-bottom-color: #2787f4;
      &:hover {
        background: #2787f4;
      }
    `}
`;

export const AuthPageWrapper = styled.section`
  position: relative;
  width: 350px;
  padding-top: 80px;
  margin: auto;
  z-index: 2;
  display: flex;
  flex-direction: column;
`;

export const AuthFormWrapper = styled.div`
  padding: 15px;
  background-color: #2c2f34;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

export const OAuthWrapper = styled(AuthFormWrapper)`
  padding: 12px !important;
`;

export const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const AuthInput = styled.input`
  background-color: #191919;
  color: #f2f2f2;
  border: 1px solid transparent;
  padding: 5px 10px;
  border-radius: 5px;
  height: 32px;
  margin-bottom: 10px;
  &:focus {
    outline: none;
    border: 1px solid #1bb76e;
  }
`;

export const SubmitBth = styled.button`
  padding: 10px 25px;
  background-color: #5c69ff;
  color: #f2f2f2;
  border-radius: 2px;
  font-weight: 100;
`;

export const AuthMethodSwitcherWithSubmit = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
`;

export const AuthMethodSwitcherLink = styled(Link)``;

export const AuthMethodSwitcherBaseLink = styled.a`
  color: #fff;
  opacity: 0.9;
  align-self: center;
  margin-right: 15px;
`;

export const LastAuthInput = styled(AuthInput)`
  margin-bottom: 0 !important;
`;
