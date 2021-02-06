import styled from "styled-components";

export const GalleryContentWrapper = styled.div``;
export const GalleryImageList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const GalleryImageWrapper = styled.div`
  max-width: 100%;
  margin-bottom: 24px;
  background-color: rgba(0, 0, 0, 0.1);
  min-height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GalleryDescriptionWrapper = styled.div`
  margin-bottom: 24px;
  padding: 0 24px;
  font-family: Proxima Nova Regular, Helvetica Neue, Helvetica, Arial,
    sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: hsla(0, 0%, 100%, 0.9);
  white-space: pre-wrap;
  word-wrap: break-word;
`;

export const GalleryDescription = styled.span``;

export const Image = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 100%;
  object-fit: cover;
  height: 100%;
`;
