import React,{useState} from "react";
import { connect } from "react-redux";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import { ContainerComponent, ButtonsComponent } from "./Auth.styles";
import {
  SignInWithGoogleStart,
  SignInWithWithEmailAndPasswordStart,
} from "../Redux/User/UserAction";
const intialState = {
  email: "",
  password: "",
};

const SignIn = ({SignInWithWithEmailAndPasswordStart, SignInWithGoogleStart}) => {
  const [userCredentials,setCredentials] = useState(intialState)
  const { email, password } = userCredentials;
  const  hundleSubmit = async (e) => {
    e.preventDefault();
    SignInWithWithEmailAndPasswordStart(email, password);
  };
  const hundleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...userCredentials, [name]: value });
  };
    return (
      <ContainerComponent>
        <h2>I have an account</h2>
        <span>Sign in with your e-mail and password</span>
        <form onSubmit={() => hundleSubmit}>
          <FormInput
            type="email"
            id="email"
            name="email"
            label="Email:"
            value={email}
            handleChange={hundleChange}
            required
          />
          <FormInput
            type="password"
            id="password"
            name="password"
            label="Password:"
            value={password}
            handleChange={hundleChange}
            required
          />
          <ButtonsComponent>
            <Button type="submit">SignIn</Button>
            <Button
              type="button"
              onClick={SignInWithGoogleStart}
              signInWithGoogle
            >
              SignIn with Google
            </Button>
          </ButtonsComponent>
        </form>
      </ContainerComponent>
    );
  }
const mapDispatchToProps = (dispatch) => ({
  SignInWithGoogleStart: () => dispatch(SignInWithGoogleStart()),
  SignInWithWithEmailAndPasswordStart: (email, password) =>
    dispatch(SignInWithWithEmailAndPasswordStart({ email, password })),
});
export default connect(null, mapDispatchToProps)(SignIn);
