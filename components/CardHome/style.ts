import styled, { css } from "styled-components";

import UpvoteIcon from "../../assets/images/arrow-fat-icon.svg";
import Comments from "../../assets/images/comments-icon.svg";
import Eye from "../../assets/images/eye-icon.svg";

interface IListProps {
  first?: boolean;
  last?: boolean;
}

interface IButtonProps extends ICardControllerProps {
  upvote?: boolean;
  downvote?: boolean;
}

interface ICardControllerProps {
  upvoted?: string;
  downvoted?: string;
}

export const CardWrapper = styled.div`
  position: relative;
  width: 240px;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.16);

    .card-controller-wrapper {
      background: #56585f;
    }
  }
`;

export const CardLink = styled.a`
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transition: opacity 0.25s;
    background: #ffffff;
    opacity: 0;
    z-index: 1;
  }

  &:hover {
    &:before {
      opacity: 0.1;
    }
  }
`;

export const CardImageWrapper = styled.div`
  overflow: hidden;
`;

export const CardImage = styled.img`
  width: 100%;
`;

export const CardControllersWrapper = styled.div<ICardControllerProps>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #474a51;
  transition: background-color 0.25s;
  padding-top: 12px;
  border-bottom: 4px solid transparent;

  ${(props) =>
    props.upvoted
      ? css`
          border-color: #1bb76e;
        `
      : null}
  ${(props) =>
    props.downvoted
      ? css`
          border-color: #f1475d;
        `
      : null}
`;

export const CardControllerTitle = styled.p`
  font-weight: 600;
  line-height: 1.14;
  font-size: 14px;
  text-align: left;
  color: #fff;
  display: inline-block;
  max-height: 45px;
  overflow: hidden;
  padding: 0 15px;
`;

export const CardControllerTitleSpan = styled.span`
  display: -webkit-box;
  max-height: 31.92px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export const CardControllerInfoList = styled.ul`
  display: flex;
  justify-content: space-between;
  min-height: 8px;
  padding: 0 15px;
`;
export const CardControllerInfoListItem = styled.li<IListProps>`
  display: flex;
  align-items: center;
  padding-bottom: 12px;
  padding-top: 6px;
  flex: 1;
  justify-content: center;
  z-index: 1;

  ${(props) =>
    props.first &&
    css`
      justify-content: flex-start;
    `}

  ${(props) =>
    props.last &&
    css`
      justify-content: flex-end;
    `}
  
  svg {
    width: 12px;
    height: 16px;
    position: relative;
    margin-right: 4px;
  }
`;

export const CardControlBtn = styled.button<IButtonProps>`
  display: inherit;
  align-items: inherit;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.3px;
  color: hsla(0, 0%, 100%, 0.6);
  opacity: 0.65;
  outline: none;

  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;

    span {
      color: #ffffff;
    }
  }

  ${(props) =>
    props.upvote &&
    css`
      &:hover {
        span {
          color: #1bb76e;
        }
        svg {
          path {
            stroke: #1bb76e;
            fill: #1bb76e;
          }
        }
      }
    `}
  ${(props) =>
    props.downvote &&
    css`
      &:hover {
        span {
          color: #f1475d;
        }
        svg {
          path {
            stroke: #f1475d;
            fill: #f1475d;
          }
        }
      }
    `}
  ${(props) =>
    props.upvoted || props.downvoted
      ? css`
          opacity: 1;
        `
      : null}
`;

export const CardControlUpvote = styled(UpvoteIcon)<ICardControllerProps>`
  transition: all 0.2s ease;

  ${(props) =>
    props.upvoted
      ? css`
          path {
            fill: #1bb76e;
            stroke: #1bb76e;
          }
        `
      : null}

  ${(props) =>
    props.downvoted
      ? css`
          path {
            fill: #f1475d;
            stroke: #f1475d;
          }
        `
      : null}
`;
export const CardControlDownvote = styled(UpvoteIcon)<ICardControllerProps>`
  transform: rotate(180deg);
  transition: all 0.3s ease;

  ${(props) =>
    props.upvoted
      ? css`
          path {
            fill: #1bb76e;
            stroke: #1bb76e;
          }
        `
      : null}

  ${(props) =>
    props.downvoted
      ? css`
          path {
            fill: #f1475d;
            stroke: #f1475d;
          }
        `
      : null}
`;
export const CardControlComments = styled(Eye)``;
export const CardControlViews = styled(Comments)``;

export const CardControlCount = styled.span<ICardControllerProps>`
  margin-top: 2px;
  transition: color 0.2s ease;

  ${(props) =>
    props.upvoted &&
    css`
      color: #1bb76e;
    `}

  ${(props) =>
    props.downvoted &&
    css`
      color: #f1475d;
    `}
`;
