import React from "react";

import * as IMGUR from "./style";

const IS_DISABLED = true;

const DNDPopup: React.FC<{ scale: number }> = ({ scale }) => {
  return (
    <IMGUR.PopupMainWrapper style={{ transform: `scale(${scale})` }}>
      <IMGUR.PopupCloseBtnWrapper href="/" passHref>
        <IMGUR.PopupCloseBtn>
          <IMGUR.PopupCloseIcon />
        </IMGUR.PopupCloseBtn>
      </IMGUR.PopupCloseBtnWrapper>
      <IMGUR.PopupContentWrapper>
        <IMGUR.PopupDropZone>
          <IMGUR.PopupDropImageHere>
            <IMGUR.PopupDropImageHereTitle>
              Drop images here
            </IMGUR.PopupDropImageHereTitle>
          </IMGUR.PopupDropImageHere>
          <IMGUR.PopupDropZoneDayLightBG />
          <IMGUR.PopupDropZoneDayLightSkyBG />
          <IMGUR.PopupTelescopeImage />
          <IMGUR.PopupTelescopeBgImage />
        </IMGUR.PopupDropZone>
        <IMGUR.PopupNewPostOtherWay>
          <IMGUR.PopupInputFile
            type="file"
            id="imgur-popup-file-input"
            accept=".jpg,.jpeg,.png,.gif,.apng,.tiff,.tif,.bmp,.xcf,.webp,.mp4,.mov,.avi,.webm,.mpeg,.flv,.mkv,.mpv,.wmv"
          />
          <IMGUR.PopupLabelForInputFile htmlFor="imgur-popup-file-input">
            <IMGUR.PopupUploadFileIcon />
            Choose Photo/Video
          </IMGUR.PopupLabelForInputFile>
          <IMGUR.PopupOR>or</IMGUR.PopupOR>
          <IMGUR.PopupInputUrlWrapper>
            <IMGUR.PopupInputUrl type="text" placeholder="Paste image or URL" />
          </IMGUR.PopupInputUrlWrapper>
          <IMGUR.PopupOtherControlsWrapper>
            <IMGUR.PopupOtherControlBtn disabled={IS_DISABLED}>
              <IMGUR.PopupPuppyIcon />
              Meme Gen
            </IMGUR.PopupOtherControlBtn>
            <IMGUR.PopupOtherControlBtn disabled={IS_DISABLED}>
              <IMGUR.PopupCameraIcon />
              Video to Gif
            </IMGUR.PopupOtherControlBtn>
            <IMGUR.PopupOtherControlBtn disabled={IS_DISABLED}>
              <IMGUR.PopupUserUploadsIcon />
              My Uploads
            </IMGUR.PopupOtherControlBtn>
          </IMGUR.PopupOtherControlsWrapper>
        </IMGUR.PopupNewPostOtherWay>
      </IMGUR.PopupContentWrapper>
    </IMGUR.PopupMainWrapper>
  );
};

export default DNDPopup;
