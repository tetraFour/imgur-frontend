import { useOnClickOutside } from "lib/Hooks/useOutsideClick";
import React, { useCallback, useRef, useState } from "react";

import * as IMGUR from "./style";

const AuthorAndMenu = () => {
  const dropdown = useRef<HTMLDivElement | null>(null);
  const button = useRef<HTMLButtonElement | null>(null);
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  useOnClickOutside(
    dropdown,
    button,
    useCallback(() => setIsDropDownVisible(false), [])
  );

  return (
    <IMGUR.AuthorPanelWrapper>
      <IMGUR.AuthorAvatarWrapper>
        <IMGUR.AuthorAvatar
          style={{
            backgroundImage: `url("https://i.imgur.com/IZF0wHC_d.png?maxwidth=155&fidelity=grand")`,
          }}
        />
      </IMGUR.AuthorAvatarWrapper>
      <IMGUR.AuthorNameAndMetaWrapper>
        <IMGUR.AuthorInfo>
          <IMGUR.AuthorLink>qweqwe</IMGUR.AuthorLink>
        </IMGUR.AuthorInfo>
        <IMGUR.AuthorMeta>
          <IMGUR.MetaInfo>89,947 views</IMGUR.MetaInfo>
          <IMGUR.Delimiter>&bull;</IMGUR.Delimiter>
          <IMGUR.MetaInfo>6h</IMGUR.MetaInfo>
        </IMGUR.AuthorMeta>
      </IMGUR.AuthorNameAndMetaWrapper>
      <IMGUR.GalleryOptionsWrapper>
        <IMGUR.GalleryOptionsDropdownBtn
          ref={button}
          onClick={() => setIsDropDownVisible(!isDropDownVisible)}
        >
          <IMGUR.GalleryOptionsDropdownIcon />
        </IMGUR.GalleryOptionsDropdownBtn>

        {isDropDownVisible && (
          <IMGUR.DropDownWrapper ref={dropdown}>
            <IMGUR.DropDownTriangleIcon />
            <IMGUR.DropDownList>
              <IMGUR.DropDownItem>
                <IMGUR.DropDownItemBtn>
                  <IMGUR.EmbedIcon />
                  <IMGUR.DropDownBtnTitle>Embed</IMGUR.DropDownBtnTitle>
                </IMGUR.DropDownItemBtn>
              </IMGUR.DropDownItem>
              <IMGUR.DropDownItem>
                <IMGUR.DropDownItemBtn>
                  <IMGUR.DownloadIcon />
                  <IMGUR.DropDownBtnTitle>Download</IMGUR.DropDownBtnTitle>
                </IMGUR.DropDownItemBtn>
              </IMGUR.DropDownItem>
            </IMGUR.DropDownList>
          </IMGUR.DropDownWrapper>
        )}
      </IMGUR.GalleryOptionsWrapper>
    </IMGUR.AuthorPanelWrapper>
  );
};

export default AuthorAndMenu;
