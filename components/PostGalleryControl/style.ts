import styled, { css } from "styled-components";

import AddToFavoriteIcon from "../../assets/images/gallery-add-to-favorite-icon.svg";
import DownvoteIcon from "../../assets/images/gallery-downvote-icon.svg";
import UpvoteIcon from "../../assets/images/gallery-upvote-icon.svg";
import CommentsIcon from "../../assets/images/post-comments-icon.svg";

interface IGalleryControlProps {
  heart?: boolean;
  upvote?: boolean;
  downvote?: boolean;
  comments?: boolean;
}

export const GalleryControlWrapper = styled.div``;
export const GalleryControlSticky = styled.div`
  position: sticky;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 200px;
`;
export const GalleryControlListWrapper = styled.div`
  border: 1px solid #464b57;
  box-sizing: border-box;
  border-radius: 4px;
  height: auto;
  width: 60px;
  margin-bottom: 30px;
  align-self: flex-start;
`;

export const GalleryControl = styled.button<IGalleryControlProps>`
  width: 100%;
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  transition: transform 0.4s ease;

  ${(props) =>
    props.comments &&
    css`
      flex-direction: column;
    `}

  ${(props) =>
    props.heart &&
    css`
      &:hover {
        transform: scale(1.1);

        svg {
          path {
            stroke: #43d0bd;
          }
        }
      }
    `}
  
  ${(props) =>
    props.upvote &&
    css`
      &:hover {
        transform: translate(0, -2px);

        svg {
          path {
            stroke: #01b96b;
          }
        }
      }
    `}
  ${(props) =>
    props.downvote &&
    css`
      &:hover {
        transform: translate(0, 2px);

        svg {
          path {
            stroke: #fc6369;
          }
        }
      }
    `}
`;

export const GalleryControlCounter = styled.div`
  font-size: 12px;
  line-height: 12px;
  opacity: 1;
  transition: opacity 0.15s linear;
  font-family: Proxima Nova Bold, Helvetica Neue, Helvetica, Arial, sans-serif;
  letter-spacing: 0.05em;
  color: #ffffff;
`;

export const GalleryControlLabel = styled.span`
  font-size: 12px;
  line-height: 12px;
  padding-top: 6px;
  font-family: Proxima Nova Bold, Helvetica Neue, Helvetica, Arial, sans-serif;
  letter-spacing: 0.05em;
  color: #ffffff;
`;

export const GalleryControlAddToFavoriteIcon = styled(AddToFavoriteIcon)`
  transition: all 0.3s ease;
`;
export const GalleryControlUpvoteIcon = styled(UpvoteIcon)`
  transition: all 0.3s ease;
`;
export const GalleryControlDownvoteIcon = styled(DownvoteIcon)`
  transition: all 0.3s ease;
`;

export const GalleryControlCommentsIcon = styled(CommentsIcon)``;
