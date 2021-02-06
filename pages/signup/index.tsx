import React from "react";

import { SignUpForm } from "../../components/AuthContainers";
import { AuthPageWrapper } from "../../components/AuthContainers/styles";

const Signup = () => {
  return (
    <AuthPageWrapper>
      <SignUpForm />
    </AuthPageWrapper>
  );
};

export default Signup;
