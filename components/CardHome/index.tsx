import Link from "next/link";
import React, { useMemo, useState } from "react";

import { ICard } from "../Grid";
import * as IMGUR from "./style";

const CardHome: React.FC<ICard> = (props): React.ReactElement => {
  const [isUpvoted, setIsUpvoted] = useState<boolean>(false);
  const [isDownvoted, setIsDownvoted] = useState<boolean>(false);

  const {
    title,
    likes,
    dislikes,
    views,
    comments,
    link,
    imageUrl,
    height,
  } = props;

  const mockStylesForCard = useMemo(
    () => ({
      height: `${Math.floor(Math.random() * 3 + 2)}00px`,
    }),
    []
  );

  const onUpvoteClick = () => {
    setIsUpvoted(true);
    if (isDownvoted === true) {
      setIsDownvoted(false);
    }
  };

  const onDownvoteClick = () => {
    setIsDownvoted(true);
    if (isUpvoted === true) {
      setIsUpvoted(false);
    }
  };

  return (
    <IMGUR.CardWrapper style={height ? { height: "240px" } : mockStylesForCard}>
      <Link passHref href={`/post/${link}`}>
        <IMGUR.CardLink />
      </Link>
      <IMGUR.CardImageWrapper>
        <IMGUR.CardImage src={imageUrl} />
      </IMGUR.CardImageWrapper>
      <IMGUR.CardControllersWrapper
        upvoted={isUpvoted ? isUpvoted.toString() : null}
        downvoted={isDownvoted ? isDownvoted.toString() : null}
        className="card-controller-wrapper"
      >
        <IMGUR.CardControllerTitle>
          <IMGUR.CardControllerTitleSpan>{title}</IMGUR.CardControllerTitleSpan>
        </IMGUR.CardControllerTitle>
        <IMGUR.CardControllerInfoList>
          <IMGUR.CardControllerInfoListItem first>
            <IMGUR.CardControlBtn
              upvote
              upvoted={isUpvoted ? isUpvoted.toString() : null}
              downvoted={isDownvoted ? isDownvoted.toString() : null}
              onClick={onUpvoteClick}
            >
              <IMGUR.CardControlUpvote
                upvoted={isUpvoted ? isUpvoted.toString() : null}
              />
              <IMGUR.CardControlCount
                upvoted={isUpvoted ? isUpvoted.toString() : null}
              >
                {likes}
              </IMGUR.CardControlCount>
            </IMGUR.CardControlBtn>
          </IMGUR.CardControllerInfoListItem>
          <IMGUR.CardControllerInfoListItem>
            <IMGUR.CardControlBtn
              downvote
              upvoted={isUpvoted ? isUpvoted.toString() : null}
              downvoted={isDownvoted ? isDownvoted.toString() : null}
              onClick={onDownvoteClick}
            >
              <IMGUR.CardControlDownvote
                downvoted={isDownvoted ? isDownvoted.toString() : null}
              />
              <IMGUR.CardControlCount
                downvoted={isDownvoted ? isDownvoted.toString() : null}
              >
                {dislikes}
              </IMGUR.CardControlCount>
            </IMGUR.CardControlBtn>
          </IMGUR.CardControllerInfoListItem>
          <IMGUR.CardControllerInfoListItem>
            <IMGUR.CardControlBtn>
              <IMGUR.CardControlViews />
              <IMGUR.CardControlCount>{comments}</IMGUR.CardControlCount>
            </IMGUR.CardControlBtn>
          </IMGUR.CardControllerInfoListItem>
          <IMGUR.CardControllerInfoListItem last>
            <IMGUR.CardControlBtn>
              <IMGUR.CardControlComments />
              <IMGUR.CardControlCount>{views}</IMGUR.CardControlCount>
            </IMGUR.CardControlBtn>
          </IMGUR.CardControllerInfoListItem>
        </IMGUR.CardControllerInfoList>
      </IMGUR.CardControllersWrapper>
    </IMGUR.CardWrapper>
  );
};
export default CardHome;
