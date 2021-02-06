import React from "react";

import Button from "../Button";

const HeaderAuthControl = () => {
  return (
    <>
      <Button href="/signin">Sign in</Button>
      <Button href="/signup" salad>
        Sign up
      </Button>
    </>
  );
};

export default HeaderAuthControl;
