import styled from "styled-components";

import UpvoteIcon from "../../../assets/images/post-comment-upvote.svg";

export const CommentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  margin-bottom: 16px;

  &:hover {
    .comment-hover-bg {
      visibility: visible;
    }
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    height: 1px;
    width: 100%;
    background: repeat-x 0 100%
      url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Cpath fill='%23464B57' d='M0 0h1v.5H0z'/%3E%3C/svg%3E");
    bottom: -4px;
  }
`;

export const CommentHoverBackground = styled.div`
  visibility: hidden;
  position: absolute;
  width: calc(100% + 18px);
  height: calc(100% + 9px);
  background-color: #2e3035;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  margin: -8px 0 0 -8px;
  z-index: 0;
  cursor: pointer;

  &:hover {
    visibility: visible;
  }
`;

export const CommentContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  width: 100%;
  position: relative;
  z-index: 1;
`;

export const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 12px;
  color: #b4b9c2;
  margin-bottom: 4px;
`;

export const CommentAvatarWrapper = styled.div`
  width: 24px;
  margin-right: 8px;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const CommentAvatar = styled.a`
  display: block;
  background-color: grey;
  border-radius: 100%;
  height: 24px;
  width: 24px;
  background-size: cover;
`;

export const CommentUserLink = styled.a`
  text-overflow: ellipsis;
  color: #01b96b;
  font-family: Proxima Nova Bold, Helvetica Neue, Helvetica, Arial, sans-serif;
`;

export const CommentDate = styled.span``;

export const Delimiter = styled.span`
  padding: 0 5px; //todo MOVE TO GLOBAL STYLES
`;

export const CommentBody = styled.div`
  font-size: 15px;
  line-height: 150%;
  overflow-wrap: break-word;
`;

export const CommentText = styled.span`
  font-size: 15px;
  line-height: 150%;
  overflow-wrap: break-word;
`;
export const CommentFooter = styled.div`
  display: flex;
  margin: 4px 0 8px -5px;
  align-items: center;
  color: #b4b9c2;
  font-family: Proxima Nova Bold, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 12px;
  line-height: 12px;
`;

export const CommentVote = styled.button`
  display: flex;
  align-items: center;
  border: 0;
  background-color: transparent;
  color: #b4b9c2;
  outline: none;
  cursor: pointer;
  padding: 5px;
  position: relative;
  min-height: 19px;
  border-radius: 3px;
  height: 26px;
  justify-content: center;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;

  &:hover {
    background-color: hsla(0, 0%, 100%, 0.12);
  }
`;

export const CommentVoteCount = styled.span`
  padding: 0 6px;
`;

export const CommentUpvoteIcon = styled(UpvoteIcon)``;
export const CommentDownvoteIcon = styled(UpvoteIcon)`
  transform: rotate(-180deg);
`;
