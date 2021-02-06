import React, { useState } from "react";

import AuthorAndMenu from "./AuthorAndMenu";
import CommentsForm from "./CommentFrom";
import CommentsList from "./CommentsList";
import Gallery from "./Gallery";
import * as IMGUR from "./style";
import TitleWithNav from "./TitleWithNav";

interface IComments {
  id: number;
  date: Date;
  content: string;
}

const PostGalleryMainInfo: React.FC = () => {
  const [comments, setComments] = useState<IComments[]>([
    { id: new Date().getTime(), date: new Date(), content: "awsome comment" },
  ]);

  return (
    <IMGUR.PostGalleryWrapper>
      <TitleWithNav />
      <AuthorAndMenu />
      <Gallery />
      <CommentsForm setComments={setComments} />
      <CommentsList comments={comments} />
    </IMGUR.PostGalleryWrapper>
  );
};

export default PostGalleryMainInfo;
