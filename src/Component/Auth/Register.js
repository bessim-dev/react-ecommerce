import React,{useState} from "react";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import { ContainerComponent } from "./Auth.styles";
import {connect} from 'react-redux';
import { SignUpStart } from "../Redux/User/UserAction";
const initialState = {
  name: "",
  last_name: "",
  email: "",
  password: "",
  passwordC: "",
};
const Register = ({signUpStart}) => {
  const [userCredentials, setCredentials] = useState(initialState)
  const { name, email, password, passwordC, last_name } = userCredentials;
  const hundleSubmit = async (e) => {
    e.preventDefault();
    if (password !== passwordC) {
      alert("password does not match");
      return;
    } 
    signUpStart(userCredentials)
  };
  const hundleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...userCredentials, [name]: value });
  };
    return (
      <ContainerComponent>
        <h2>I don't have an account</h2>
        <span>Register Now!</span>
        <form onSubmit={() => hundleSubmit}>
          <FormInput
            type="text"
            id="name"
            name="name"
            label="Name:"
            value={name}
            handleChange={hundleChange}
            required
          />
          <FormInput
            type="text"
            id="last_name"
            name="last_name"
            label="Last Name:"
            value={last_name}
            handleChange={hundleChange}
            required
          />
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
          <FormInput
            type="password"
            id="passwordC"
            name="passwordC"
            label="Confirm Password:"
            value={passwordC}
            handleChange={hundleChange}
            required
          />
          <Button type="submit" onClick={hundleSubmit}>Register</Button>
        </form>
      </ContainerComponent>
    );
  }
const mapDispatchToProps = dispatch => ({
  signUpStart : (credentials) => dispatch(SignUpStart(credentials))
})
export default connect(null,mapDispatchToProps)(Register);
