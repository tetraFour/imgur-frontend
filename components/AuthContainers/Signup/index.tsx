import React, { useEffect, useState } from "react";

import OAuthPanel from "../OAuthPanel";
import * as IMGUR from "../styles";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

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
      <IMGUR.AuthTitle>Register with</IMGUR.AuthTitle>
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
          <IMGUR.AuthInput
            type="text"
            value={email}
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <IMGUR.AuthInput
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <IMGUR.LastAuthInput
            type="password"
            value={retypePassword}
            placeholder="Retype password"
            onChange={(e) => setRetypePassword(e.target.value)}
          />
        </IMGUR.AuthFormWrapper>
        <IMGUR.AuthMethodSwitcherWithSubmit>
          <IMGUR.AuthMethodSwitcherLink passHref href="/signin">
            <IMGUR.AuthMethodSwitcherBaseLink>
              Sign in
            </IMGUR.AuthMethodSwitcherBaseLink>
          </IMGUR.AuthMethodSwitcherLink>
          <IMGUR.SubmitBth type="submit">Register</IMGUR.SubmitBth>
        </IMGUR.AuthMethodSwitcherWithSubmit>
      </IMGUR.SignInForm>
    </>
  );
};

export default SignUp;
