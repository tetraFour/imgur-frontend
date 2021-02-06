import React, { useEffect } from "react";

import { useTranslateHeader } from "../../lib/Hooks";
import HeaderAuthControl from "../HeaderAuthControl";
import HeaderLogo from "../HeaderLogo";
import HeaderSearchControl from "../HeaderSearchControl";
import NewPostBtn from "../NewPostBtn";
import SnowFall from "../SnowFall";
import * as IMGUR from "./style";

const Header = (): React.ReactElement => {
  const {
    translateHeaderOnScroll,
    position,
    top,
    boxShadow,
  } = useTranslateHeader();

  useEffect(() => {
    translateHeaderOnScroll();
    window.addEventListener("scroll", translateHeaderOnScroll);

    return () => window.removeEventListener("scroll", translateHeaderOnScroll);
  }, [translateHeaderOnScroll]);

  return (
    <IMGUR.header style={{ top, position, boxShadow }}>
      <IMGUR.HeaderControlWrapper>
        <HeaderLogo />
        <NewPostBtn />
        <HeaderSearchControl />
        <HeaderAuthControl />
      </IMGUR.HeaderControlWrapper>
      <SnowFall />
    </IMGUR.header>
  );
};

export default Header;
