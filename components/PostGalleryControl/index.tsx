import React from "react";

import * as IMGUR from "./style";

const PostGalleryControl = () => {
  return (
    <IMGUR.GalleryControlWrapper>
      <IMGUR.GalleryControlSticky>
        <IMGUR.GalleryControlListWrapper>
          <IMGUR.GalleryControl upvote>
            <IMGUR.GalleryControlUpvoteIcon />
          </IMGUR.GalleryControl>
          <IMGUR.GalleryControl>
            <IMGUR.GalleryControlCounter>5,444</IMGUR.GalleryControlCounter>
          </IMGUR.GalleryControl>
          <IMGUR.GalleryControl downvote>
            <IMGUR.GalleryControlDownvoteIcon />
          </IMGUR.GalleryControl>
          <IMGUR.GalleryControl heart>
            <IMGUR.GalleryControlAddToFavoriteIcon />
          </IMGUR.GalleryControl>
        </IMGUR.GalleryControlListWrapper>
        <IMGUR.GalleryControlListWrapper>
          <IMGUR.GalleryControl comments>
            <IMGUR.GalleryControlCommentsIcon />
            <IMGUR.GalleryControlLabel>105</IMGUR.GalleryControlLabel>
          </IMGUR.GalleryControl>
        </IMGUR.GalleryControlListWrapper>
      </IMGUR.GalleryControlSticky>
    </IMGUR.GalleryControlWrapper>
  );
};

export default PostGalleryControl;
