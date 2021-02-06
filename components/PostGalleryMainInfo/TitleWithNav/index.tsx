import React from "react";

import * as IMGUR from "./style";

const MOCK_TITLE = "Why didnt I think of that option...";

const TitleWithNav = () => {
  return (
    <IMGUR.PostGalleryTitleAndNav>
      <IMGUR.PostGalleryTitle>{MOCK_TITLE}</IMGUR.PostGalleryTitle>
      <IMGUR.PostGalleryNav>
        <IMGUR.PostGalleryLinkWrapper passHref href="/post/1">
          <IMGUR.PostGalleryLink>
            <IMGUR.PostGalleryLinkTitle>Next</IMGUR.PostGalleryLinkTitle>
            <IMGUR.PostNextPostArrowIcon />
          </IMGUR.PostGalleryLink>
        </IMGUR.PostGalleryLinkWrapper>
      </IMGUR.PostGalleryNav>
    </IMGUR.PostGalleryTitleAndNav>
  );
};

export default TitleWithNav;
