import React from "react";
import Register from "../../Component/Auth/Register";
import SignIn from "../../Component/Auth/SignIn";
import { AuthContainer } from "./Auth.style";
const Auth = () => {
  return (
    <AuthContainer>
      <SignIn/>
      <Register />
    </AuthContainer>
  );
};

export default Auth;
