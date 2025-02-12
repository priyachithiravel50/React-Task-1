import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./signin.css";
import { Navigate } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Password: "",
      errors: {},
      showPassword: false,
      navigateToSignup: false,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  validateForm = () => {
    const { Name,  Password} = this.state;
    let errors = {};
    let isValid = true;

    if (!Name.trim()) {
      errors.Name = "Username is required";
      isValid = false;
    }
   
    if (!Password.trim()) {
      errors.Password = "Password is required";
      isValid = false;
    }
    

    this.setState({ errors });
    return isValid;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.validateForm()) return;

    alert("Registration Successful!");
    // this.props.navigate("/home");
    this.setState({ Name: "",  Password: "", errors: {} });
  };

  togglePassword = () => {
    this.setState((prevState) => ({ showPassword: !prevState.showPassword }));
  };

  render() {
    const { navigateToSignup} = this.state;
    if (navigateToSignup){
      return<Navigate to='/Signup'/>;
    }
    return (
      <div className="contains mt-5 ">
        <div className="card p-4 shadow-lg w-50 mx-auto">
          <h2 className="text-center">Register</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" id="Name" placeholder="Enter your name" value={this.state.Name} onChange={this.handleChange}/>
              {this.state.errors.Name && <small className="text-danger">{this.state.errors.Name}</small>}
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type={this.state.showPassword ? "text" : "password"} className="form-control" id="Password" placeholder="Enter password" value={this.state.Password} onChange={this.handleChange}/>
              {this.state.errors.Password && <small className="text-danger">{this.state.errors.Password}</small>}
            </div>
             <div className="form-check mb-3">
              <input type="checkbox" className="form-check-input" id="terms"/>
              <label className="form-check-label">I agree to the terms and conditions</label>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
          <p className="text-center mt-3">
            Already have an account? <a href="#" onClick={() => this.setState({navigateToSignup: true })}className="text-primary">Sign Up</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Register;
