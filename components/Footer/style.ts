import Link from "next/link";
import styled, { css } from "styled-components";

interface IFooter {
  isVisible: boolean;
}

export const footer = styled.footer<IFooter>`
  position: fixed;
  transition: transform 0.4s ease;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background-color: #33353b;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  padding: 0 24px;
  transform: translate(0, 50px);

  ${(props) =>
    props.isVisible &&
    css`
      transform: translate(0, 0);
    `}
`;

export const footerNav = styled.nav`
  height: 50px;
`;
export const footerNavList = styled.ul`
  display: flex;
  height: 100%;
`;
export const footerNavListItem = styled.li`
  color: #b4b9c2;
  margin: auto 20px;
  font-weight: 700;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 13px;

  &:first-child {
    margin-right: auto;
  }
`;
export const footerNavListItemLink = styled(Link)``;
export const footerNavListItemBaseLink = styled.a`
  font-weight: 400;
  color: inherit;
  text-decoration: none;
`;
