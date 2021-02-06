import styled from "styled-components";

export const PostGalleryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 24px;
  padding: 0 24px 24px;
  min-width: 0;
`;
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
  width: 120px;
  height: 36px;
  background-color: red;
`;
