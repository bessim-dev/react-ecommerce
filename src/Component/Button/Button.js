import React from "react";
import "./Button.scss";
const Button = ({ children, signInWithGoogle,inverted, ...rest }) => {
  return (
    <button
      className={`${signInWithGoogle ? "google" : ""} 
        ${inverted ? "inverted" : ""} button`}
      {...rest}
    >
      {children}
    </button>
  );
};
export default Button;
