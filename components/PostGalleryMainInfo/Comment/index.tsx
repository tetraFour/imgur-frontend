import React from "react";

import * as IMGUR from "./style";

const Comment = ({ comment }) => {
  return (
    <IMGUR.CommentWrapper>
      <IMGUR.CommentHoverBackground className="comment-hover-bg" />
      <IMGUR.CommentContentWrapper>
        <IMGUR.CommentHeader>
          <IMGUR.CommentAvatarWrapper>
            <IMGUR.CommentAvatar
              style={{
                backgroundImage:
                  "url(https://i.imgur.com/IZF0wHC_d.png?maxwidth=155&fidelity=grand)",
              }}
            />
          </IMGUR.CommentAvatarWrapper>
          <IMGUR.CommentUserLink>CirB</IMGUR.CommentUserLink>
          <IMGUR.Delimiter>&bull;</IMGUR.Delimiter>
          <IMGUR.CommentDate>{comment.date.toString()}</IMGUR.CommentDate>
        </IMGUR.CommentHeader>
        <IMGUR.CommentBody>
          <IMGUR.CommentText>{comment.content}</IMGUR.CommentText>
        </IMGUR.CommentBody>
        <IMGUR.CommentFooter>
          <IMGUR.CommentVote>
            <IMGUR.CommentUpvoteIcon />
          </IMGUR.CommentVote>
          <IMGUR.CommentVoteCount>324</IMGUR.CommentVoteCount>
          <IMGUR.CommentVote>
            <IMGUR.CommentDownvoteIcon />
          </IMGUR.CommentVote>
        </IMGUR.CommentFooter>
      </IMGUR.CommentContentWrapper>
    </IMGUR.CommentWrapper>
  );
};

export default Comment;
