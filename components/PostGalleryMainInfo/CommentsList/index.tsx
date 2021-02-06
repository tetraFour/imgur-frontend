import React, { useState } from "react";

import Comment from "../Comment";
import CommentsSkeleton from "./CommentsSkeleton";
import * as IMGUR from "./style";

const CommentsList = ({ comments }) => {
  const [isCommentsLoading] = useState(false);

  return (
    <>
      <IMGUR.commentsHeadline>
        <IMGUR.commentsCounter>105 Comments</IMGUR.commentsCounter>
      </IMGUR.commentsHeadline>
      {isCommentsLoading && <CommentsSkeleton />}
      <IMGUR.commentsListWrapper>
        {comments &&
          comments.map((comment) => (
            <Comment comment={comment} key={comment.id} />
          ))}
      </IMGUR.commentsListWrapper>
    </>
  );
};

export default CommentsList;
