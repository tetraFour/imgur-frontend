import React from "react";

import LogoImage from "../../assets/images/logo.svg";
import * as IMGUR from "./style";

const HeaderLogo = () => {
  return (
    <IMGUR.logoLink href="/" passHref>
      <IMGUR.logoBaseLink>
        <LogoImage viewBox="0 0 94 34" />
      </IMGUR.logoBaseLink>
    </IMGUR.logoLink>
  );
};

export default HeaderLogo;
