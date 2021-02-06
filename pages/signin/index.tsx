import { SignInForm } from "components/AuthContainers";
import { AuthPageWrapper } from "components/AuthContainers/styles";
import React from "react";

const Signin = () => {
  return (
    <AuthPageWrapper>
      <SignInForm />
    </AuthPageWrapper>
  );
};

export default Signin;
