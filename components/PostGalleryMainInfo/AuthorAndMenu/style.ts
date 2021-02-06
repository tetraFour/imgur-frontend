import styled from "styled-components";

import DotsIcon from "../../../assets/images/dots-icon.svg";
import DropdownDownloadIcon from "../../../assets/images/download-icon.svg";
import TriangleIcon from "../../../assets/images/dropdown-triangle.svg";
import DropdownEmbedIcon from "../../../assets/images/embed-icon.svg";

export const AuthorPanelWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 36px;
  margin: 16px 0 24px;
`;
export const AuthorAvatarWrapper = styled.a``;
export const AuthorAvatar = styled.span`
  display: block;
  background-color: #43d0bd;
  background-size: cover;
  border-radius: 50%;
  height: 100%;
  width: 36px;
  min-width: 36px;
  max-width: 36px;
  overflow: hidden;
`;
export const AuthorNameAndMetaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 32px 0 12px;
  flex-grow: 1;
  justify-content: space-around;
  overflow: hidden;
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 14px;
  font-family: Proxima Nova Bold, Helvetica Neue, Helvetica, Arial, sans-serif;
  align-items: center;
`;

export const AuthorLink = styled.a`
  min-width: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-family: Proxima Nova Bold, Helvetica Neue, Helvetica, Arial, sans-serif;
  color: #1bb76e;
  cursor: pointer;
`;
export const AuthorMeta = styled.div`
  font-family: Proxima Nova Regular, Helvetica Neue, Helvetica, Arial,
    sans-serif;
  color: #b4b9c2;
  font-size: 12px;
  line-height: 12px;
`;

export const MetaInfo = styled.span``;
export const Delimiter = styled.span`
  padding: 0 5px;
`;

export const GalleryOptionsWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-content: center;
  position: relative;
`;

export const GalleryOptionsDropdownBtn = styled.button`
  font-size: 16px;
  border-radius: 3px;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover,
  &:focus {
    background-color: hsla(0, 0%, 100%, 0.12);
    cursor: pointer;
    outline: none;
    svg {
      path {
        fill: #ffffff;
      }
    }
  }
`;

export const GalleryOptionsDropdownIcon = styled(DotsIcon)``;
export const DropDownTriangleIcon = styled(TriangleIcon)`
  right: 16px;
  position: absolute;
  top: 0;
`;

export const DropDownWrapper = styled.div`
  right: -16px;
  margin-top: 4px;
  position: absolute;
  top: 100%;
  z-index: 1000;
  padding-top: 8px;
  //display: none;
`;
export const DropDownList = styled.ul`
  color: #000;
  background-color: #fff;
  border-radius: 3px;
  padding: 8px 0;
  box-shadow: 0 9px 25px 0 rgba(0, 0, 0, 0.78);
  text-transform: capitalize;
`;
export const DropDownItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
`;

export const DropDownItemBtn = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  border: none;
  padding: 8px 15px;
  outline: none;
  background: transparent;
  width: 100%;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);

    svg {
      path {
        fill: #000000;
      }
    }
  }
`;

export const DropDownBtnTitle = styled.span`
  font-family: Proxima Nova Bold, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 14px;
  white-space: nowrap;
  padding: 6px 8px;
`;

export const EmbedIcon = styled(DropdownEmbedIcon)``;
export const DownloadIcon = styled(DropdownDownloadIcon)``;
