import Footer from "@components/Footer";
import PostGalleryAside from "@components/PostGalleryAside";
import PostGalleryControl from "@components/PostGalleryControl";
import PostGalleryMainInfo from "@components/PostGalleryMainInfo";
import PostPageWrapper from "@components/PostPageWrapper";
import ScrollToTopBtn from "@components/ScrollToTopBtn";
import React from "react";

const CurrentPost = () => {
  return (
    <>
      <PostPageWrapper>
        <PostGalleryControl />
        <PostGalleryMainInfo />
        <PostGalleryAside />
      </PostPageWrapper>
      <Footer />
      <ScrollToTopBtn />
    </>
  );
};

export default CurrentPost;
