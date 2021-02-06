import styled from "styled-components";

import { skeletonBlinking } from "../../../styles/animation";

export const commentsHeadline = styled.div`
  background: repeat-x 0 100%
    url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Cpath fill='%23585D6A' d='M0 0h1v.5H0z'/%3E%3C/svg%3E");
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 14px;
  margin-bottom: 16px;
  margin-top: 46px;
`;

export const commentsCounter = styled.h4`
  font-family: Proxima Nova Bold, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 15px;
  line-height: 15px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #dadce2;
  font-weight: 400;
`;

export const commentsListWrapper = styled.div`
  position: relative;
  min-height: 385px;
`;

export const comment = styled.div`
  margin-bottom: 16px;
  cursor: pointer;
  position: relative;
`;

export const SkeletonWrapper = styled.div`
  height: 150px;
  margin-bottom: 30px;
  display: flex;
`;

export const SkeletonLine = styled.div`
  background-color: #323539;
  height: 20px;
  margin-bottom: 10px;
  border-radius: 10px;
  animation: ${skeletonBlinking} 0.9s ease-in-out infinite;
`;

export const SkeletonAvatar = styled(SkeletonLine)`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const SkeletonAvatarWrapper = styled.div`
  margin-right: 20px;
`;
export const SkeletonContentWrapper = styled.div`
  flex: 1;
  margin-top: 7px;
`;
