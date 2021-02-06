import React, { useEffect, useState } from "react";

import * as IMGUR from "./style";

const ScrollToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const toggleScrollToTopBtnVisible = () => {
    if (pageYOffset >= 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    scrollToTop();
    window.addEventListener("scroll", toggleScrollToTopBtnVisible);
    return () =>
      window.removeEventListener("scroll", toggleScrollToTopBtnVisible);
  }, []);

  return (
    <IMGUR.ScrollToTopBtnWrapper isVisible={isVisible} onClick={scrollToTop}>
      <IMGUR.ScrollToTopBtn>
        <IMGUR.ScrollToTopIcon />
        <IMGUR.ScrollToTopTitles>Move to the top</IMGUR.ScrollToTopTitles>
      </IMGUR.ScrollToTopBtn>
    </IMGUR.ScrollToTopBtnWrapper>
  );
};

export default ScrollToTopBtn;
