import React from "react";

import * as IMGUR from "./style";

const PostPageWrapper = ({ children }) => {
  return (
    <>
      <IMGUR.PostPageWrapper>
        <IMGUR.PostPageGradient />
        {/* </IMGUR.PostPageGradient> */}
        <IMGUR.PostPageContainer>{children}</IMGUR.PostPageContainer>
      </IMGUR.PostPageWrapper>
    </>
  );
};

export default PostPageWrapper;
