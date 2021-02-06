import React, { useEffect, useState } from "react";

import OAuthPanel from "../OAuthPanel";
import * as IMGUR from "../styles";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    document.body.style.backgroundColor = `#141518`;

    return () => (document.body.style.backgroundColor = ``);
  });

  return (
    <>
      <IMGUR.LinkToHomeWrapper href="/" passHref>
        <IMGUR.LinkToHome>
          <IMGUR.ImgurLogo viewBox="0 0 94 34" width="187" height="65" />
        </IMGUR.LinkToHome>
      </IMGUR.LinkToHomeWrapper>
      <IMGUR.AuthTitle>Sign In with</IMGUR.AuthTitle>
      <OAuthPanel />
      <IMGUR.AuthTitleWithLines>or with Imgur</IMGUR.AuthTitleWithLines>
      <IMGUR.SignInForm action="">
        <IMGUR.AuthFormWrapper>
          <IMGUR.AuthInput
            type="text"
            value={username}
            placeholder="Username or Email"
            onChange={(e) => setUsername(e.target.value)}
          />
          <IMGUR.LastAuthInput
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </IMGUR.AuthFormWrapper>
        <IMGUR.AuthMethodSwitcherWithSubmit>
          <IMGUR.AuthMethodSwitcherLink passHref href="/signup">
            <IMGUR.AuthMethodSwitcherBaseLink>
              need an account?
            </IMGUR.AuthMethodSwitcherBaseLink>
          </IMGUR.AuthMethodSwitcherLink>
          <IMGUR.SubmitBth type="submit">Sign in</IMGUR.SubmitBth>
        </IMGUR.AuthMethodSwitcherWithSubmit>
      </IMGUR.SignInForm>
    </>
  );
};

export default SignIn;
