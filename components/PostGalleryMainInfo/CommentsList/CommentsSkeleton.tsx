import React from "react";

import {
  SkeletonAvatar,
  SkeletonAvatarWrapper,
  SkeletonContentWrapper,
  SkeletonLine,
  SkeletonWrapper,
} from "./style";

const CommentsSkeleton = () => {
  return (
    <>
      <SkeletonWrapper>
        <SkeletonAvatarWrapper>
          <SkeletonAvatar />
        </SkeletonAvatarWrapper>
        <SkeletonContentWrapper>
          <SkeletonLine style={{ width: "50%" }} />
          <SkeletonLine />
          <SkeletonLine />
          <SkeletonLine style={{ width: "30%" }} />
        </SkeletonContentWrapper>
      </SkeletonWrapper>
      <SkeletonWrapper>
        <SkeletonAvatarWrapper>
          <SkeletonAvatar />
        </SkeletonAvatarWrapper>
        <SkeletonContentWrapper>
          <SkeletonLine style={{ width: "50%" }} />
          <SkeletonLine />
          <SkeletonLine />
          <SkeletonLine style={{ width: "30%" }} />
        </SkeletonContentWrapper>
      </SkeletonWrapper>
      <SkeletonWrapper>
        <SkeletonAvatarWrapper>
          <SkeletonAvatar />
        </SkeletonAvatarWrapper>
        <SkeletonContentWrapper>
          <SkeletonLine style={{ width: "50%" }} />
          <SkeletonLine />
          <SkeletonLine />
          <SkeletonLine style={{ width: "30%" }} />
        </SkeletonContentWrapper>
      </SkeletonWrapper>
    </>
  );
};

export default CommentsSkeleton;
