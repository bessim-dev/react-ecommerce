import React from "react";
import Register from "../../Component/Register/Register";
import SignIn from "../../Component/SignIn/SignIn";
import "./Auth.scss"
const Auth = () => {
  return (
    <div className="auth">
      <SignIn/>
      <Register />
    </div>
  );
};

export default Auth;
