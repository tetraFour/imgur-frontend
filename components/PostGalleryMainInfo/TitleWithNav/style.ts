import Link from "next/link";
import styled from "styled-components";

import PostNextPostArrow from "../../../assets/images/post-nex-post-arrow.svg";

export const PostGalleryTitleAndNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const PostGalleryTitle = styled.h1`
  font-family: Proxima Nova Bold, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 28px;
  line-height: 130%;
  color: #fff;
  overflow-wrap: break-word;
`;

export const PostGalleryNav = styled.div`
  height: 36px;
  background-color: #4a58fb;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PostGalleryLinkWrapper = styled(Link)``;
export const PostGalleryLink = styled.a`
  color: #ffffff;
  padding: 10px 11px;
  display: flex;
  font-family: Proxima Nova Bold, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  transition: transform 0.3s;

  &:hover {
    transform: translateX(2px);
  }
`;
export const PostGalleryLinkTitle = styled.span``;

export const PostNextPostArrowIcon = styled(PostNextPostArrow)`
  margin-left: 8px;
`;
