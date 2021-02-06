import Link from "next/link";
import styled from "styled-components";

import CameraIcon from "../../assets/images/camera-icon.svg";
import CrossIcon from "../../assets/images/cross.svg";
import PhotosIcon from "../../assets/images/photoes-icon.svg";
import PuppyIcon from "../../assets/images/puppy-icon.svg";
import TelescopeBgImage from "../../assets/images/telescope-bg.svg";
import TelescopeImage from "../../assets/images/telescope.svg";
import UploadFileIcon from "../../assets/images/upload-file-icon.svg";

export const PopupMainWrapper = styled.div`
  width: 480px;
  transition: transform 0.3s ease;
  background: transparent;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const PopupContentWrapper = styled.div`
  overflow: hidden;
  border-radius: 6px;
`;

export const PopupCloseBtnWrapper = styled(Link)``;

export const PopupCloseBtn = styled.a`
  width: 40px;
  height: 40px;
  background-color: #3c424b;
  border-radius: 50%;
  position: absolute;
  right: -20px;
  box-shadow: 0 0 50px 5px #000000;
  top: -20px;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PopupCloseIcon = styled(CrossIcon)``;

export const PopupDropZone = styled.div`
  height: 320px;
  position: relative;
`;

export const PopupDropImageHere = styled.div`
  border: 3px dashed hsla(0, 0%, 100%, 0.4);
  width: 264px;
  height: 72px;
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`;

export const PopupDropImageHereTitle = styled.span`
  font-weight: 700;
  letter-spacing: 0.02em;
  color: #ffffff;
  user-select: none;
`;

export const PopupTelescopeImage = styled(TelescopeImage)`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
`;
export const PopupTelescopeBgImage = styled(TelescopeBgImage)`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
`;

export const PopupDropZoneDayLightBG = styled.div`
  background: radial-gradient(
      755px at 77.71% -37.81%,
      #441b6f 0,
      rgba(23, 23, 66, 0) 100%
    ),
    transparent;

  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  z-index: 1;
`;
export const PopupDropZoneDayLightSkyBG = styled.div`
  background-color: #ffca41;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

export const PopupNewPostOtherWay = styled.div`
  padding: 24px 0;
  background-color: #3c424b;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PopupInputFile = styled.input`
  display: none;
`;
export const PopupLabelForInputFile = styled.label`
  display: flex;
  align-items: center;
  transition: opacity 0.3s ease;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  letter-spacing: 0.02em;
  font-weight: 700;

  &:hover {
    opacity: 0.75;
  }
`;
export const PopupUploadFileIcon = styled(UploadFileIcon)`
  margin-right: 10px;
`;

export const PopupOR = styled.span`
  height: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  letter-spacing: 0.02em;
  font-weight: 700;

  &:before,
  &:after {
    content: "";
    width: 40px;
    height: 1px;
    margin: 0 16px;
    background-color: #fff;
    opacity: 0.12;
  }
`;

export const PopupInputUrlWrapper = styled.div`
  height: 36px;
  width: 320px;
  margin-bottom: 48px;
`;

export const PopupInputUrl = styled.input`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 3px;
  text-align: center;
  background-color: #272a33;
  border: unset;
  outline: unset;
  font-family: Proxima Nova Bold, Helvetica Neue, Helvetica, Arial, sans-serif;
  border: 1px solid rgba(200, 191, 255, 0);
  color: #ffffff;
  transition: opacity 0.3s, border 0.3s;

  &::placeholder {
    color: #ffffff;
  }

  &:hover {
    opacity: 0.75;
    border: 1px solid rgba(200, 191, 255, 0.5);
  }

  &:focus {
    opacity: 1;
    border: 1px solid #c8bfff;
  }
`;

export const PopupOtherControlsWrapper = styled.div`
  height: 60px;
  display: flex;
  width: 320px;
  justify-content: space-between;
`;
export const PopupOtherControlBtn = styled.button`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  transition: opacity 0.3s;
  color: #fff;

  &:hover {
    opacity: 0.75;
  }

  &:disabled {
    opacity: 0.24;
    cursor: not-allowed;
  }
`;
export const PopupUserUploadsIcon = styled(PhotosIcon)``;
export const PopupPuppyIcon = styled(PuppyIcon)``;
export const PopupCameraIcon = styled(CameraIcon)``;
