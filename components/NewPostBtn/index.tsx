import React from "react";

import * as IMGUR from "./style";

const NewPostBtn = () => {
  return (
    <IMGUR.addNewPostLink href="/upload" passHref>
      <IMGUR.addNewPostBaseLink>
        <IMGUR.addNewPostImage />
        New post
      </IMGUR.addNewPostBaseLink>
    </IMGUR.addNewPostLink>
  );
};

export default NewPostBtn;
