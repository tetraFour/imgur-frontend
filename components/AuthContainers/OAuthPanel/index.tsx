import React from "react";

import AppleIcon from "../../../assets/images/apple.svg";
import FacebookIcon from "../../../assets/images/facebook.svg";
import GoogleIcon from "../../../assets/images/google-glass-logo.svg";
import TwitterIcon from "../../../assets/images/twitter.svg";
import VkIcon from "../../../assets/images/vk.svg";
import * as IMGUR from "../styles";

const OAuthPanel = () => {
  return (
    <IMGUR.OAuthWrapper>
      <IMGUR.OAuthList>
        <IMGUR.OAuthListItem>
          <IMGUR.OAuthLink facebook href="/">
            <FacebookIcon />
          </IMGUR.OAuthLink>
        </IMGUR.OAuthListItem>
        <IMGUR.OAuthListItem>
          <IMGUR.OAuthLink twitter href="/">
            <TwitterIcon />
          </IMGUR.OAuthLink>
        </IMGUR.OAuthListItem>
        <IMGUR.OAuthListItem>
          <IMGUR.OAuthLink apple href="/">
            <AppleIcon />
          </IMGUR.OAuthLink>
        </IMGUR.OAuthListItem>
        <IMGUR.OAuthListItem>
          <IMGUR.OAuthLink google href="/">
            <GoogleIcon />
          </IMGUR.OAuthLink>
        </IMGUR.OAuthListItem>
        <IMGUR.OAuthListItem>
          <IMGUR.OAuthLink vk href="/">
            <VkIcon />
          </IMGUR.OAuthLink>
        </IMGUR.OAuthListItem>
      </IMGUR.OAuthList>
    </IMGUR.OAuthWrapper>
  );
};

export default OAuthPanel;
