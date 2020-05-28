import React from "react";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import './SignIn.scss'
const intialState = {
    email:'',
    password:'',
}
class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = intialState;
    }
    hundleSubmit = (e) => {
        e.preventDefault();
        this.setState(intialState)
    }
    hundleChange = (e) => {
        const {name,value} = e.target;
        this.setState({[name]:value});
    }
  render() {
    return (
      <div className="SignIn">
        <h2>I have an account</h2>
        <span>Sign in with your e-mail and password</span>
        <form onSubmit={()=>this.hundleSubmit}>
          <FormInput
            type="email"
            id="email"
            name="email"
            label="Email:"
            value={this.state.email}
            handleChange={this.hundleChange}
            required
          />
          <FormInput
            type="password"
            id="password"
            name="password"
            label="Password:"
            value={this.state.password}
            handleChange={this.hundleChange}
            required
          />
            <Button type="submit">SignIn</Button>
        </form>
      </div>
    );
  }
}

export default SignIn;
