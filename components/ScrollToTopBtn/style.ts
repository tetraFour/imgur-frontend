import styled, { css } from "styled-components";

import scrollToTopIcon from "../../assets/images/arrow-scroll-top.svg";

interface ScrollToTopBtn {
  isVisible: boolean;
}

export const ScrollToTopBtnWrapper = styled.div<ScrollToTopBtn>`
  position: fixed;
  z-index: 2;
  right: 0;
  bottom: 0;
  padding: 21px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  ${(props) =>
    props.isVisible
      ? css`
          visibility: visible;
        `
      : css`
          visibility: hidden;
        `}
`;

export const ScrollToTopBtn = styled.button`
  display: flex;
  align-items: center;
  width: 40px;
  max-width: 136px;
  height: 36px;
  margin-top: 10px;
  background: #464b57;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.24);
  border-radius: 4px;
  cursor: pointer;
  transition-property: width;
  transition-duration: 0.3s;
  transition-timing-function: linear;
  animation-delay: 0.5s;
  overflow: hidden;

  &:hover {
    width: 136px;
  }
`;

export const ScrollToTopIcon = styled(scrollToTopIcon)`
  margin-left: 4px;
  flex-shrink: 0;
`;

export const ScrollToTopTitles = styled.span`
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0.002em;
  font-family: Proxima Nova Bold, Helvetica Neue, Helvetica, Arial, sans-serif;
  color: #fff;
  margin-left: 4px;
  flex-shrink: 0;
`;
