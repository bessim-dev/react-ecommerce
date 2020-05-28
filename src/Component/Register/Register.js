import React from "react";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import './Register.scss'
const intialState = {
    name:'',
    last_name:'',
    email:'',
    password:'',
    passwordC:'',
}
class Register extends React.Component {
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
      <div className="register">
        <h2>I don't have an account</h2>
        <span>Register Now!</span>
        <form onSubmit={()=>this.hundleSubmit}>
          <FormInput
            type="text"
            id="name"
            name="name"
            label="Name:"
            value={this.state.name}
            handleChange={this.hundleChange}
            required
          />
          <FormInput
            type="text"
            id="last_name"
            name="last_name"
            label="Last Name:"
            value={this.state.last_name}
            handleChange={this.hundleChange}
            required
          />
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
          <FormInput
            type="password"
            id="passwordC"
            name="passwordC"
            label="Confirm Password:"
            value={this.state.passwordC}
            handleChange={this.hundleChange}
            required
          />
            <Button type="submit">Register</Button>
        </form>
      </div>
    );
  }
}

export default Register;
