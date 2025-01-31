import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap import
import { Navigate } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      number: "",
      password: "",
      confirmPassword: "",
      address: "",
      role:"",
      errors: {},
      passwordVisible: false,
      confirmPasswordVisible: false,
      navigateToSignin: false,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  togglePasswordVisibility = () => {
    this.setState((prevState) => ({
      passwordVisible: !prevState.passwordVisible,
    }));
  };

  toggleConfirmPasswordVisibility = () => {
    this.setState((prevState) => ({
      confirmPasswordVisible: !prevState.confirmPasswordVisible,
    }));
  };

  validate = () => {
    const { firstName, lastName, email, number, password, confirmPassword, address } = this.state;
    let errors = {};
    let isValid = true;

    if (!firstName) {
      errors.firstName = "First Name is required";
      isValid = false;
    }
    if (!lastName) {
      errors.lastName = "Last Name is required";
      isValid = false;
    }
    if (!email) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email address";
      isValid = false;
    }
    if (!number) {
      errors.number = "Phone number is required";
      isValid = false;
    }
    if (!password) {
      errors.password = "Password is required";
      isValid = false;
    }
    if (!confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
      isValid = false;
    } else if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords must match";
      isValid = false;
    }
    if (!address) {
      errors.address = "Address is required";
      isValid = false;
    }

    this.setState({ errors });
    return isValid;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if (!isValid) return;

    alert("Registration Successful!");

    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      number: "",
      password: "",
      confirmPassword: "",
      address: "",
      errors: {},
    });
  };

  render() {
    const { firstName, lastName, email, number, password, confirmPassword, address, errors, passwordVisible, confirmPasswordVisible,navigateToSignin } = this.state;

    if (navigateToSignin){
      return<Navigate to='/Signin'/>;
    }
    return (
      <div className="contain mt-1">
        <div className=" p-4 shadow">
          <h2 className="text-center mb-4 ms-1">Register Form</h2>
          <form onSubmit={this.handleSubmit}>
          <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">First Name:</label>
                <input type="text" className="form-control" id="firstName" value={firstName} onChange={this.handleChange} placeholder="First Name"/>
                {errors.firstName && <small className="text-danger position-absolute">{errors.firstName}</small>}
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Last Name:</label>
                <input type="text" className="form-control" id="lastName" value={lastName} onChange={this.handleChange} placeholder="Last Name"/>
                {errors.lastName && <small className="text-danger">{errors.lastName}</small>}
              </div>
            </div>

            <div className="mb-3">
              <label className="">Email:</label>
              <input type="email" className="form-control" id="email" value={email} onChange={this.handleChange} placeholder="Email"/>
              {errors.email && <small className="text-danger">{errors.email}</small>}
            </div>

            <div className="mb-3">
              <label className="form-label">Phone no:</label>
              <input type="number" className="form-control" id="number" value={number} onChange={this.handleChange} placeholder="Phone no"/>
              {errors.number && <small className="text-danger">{errors.number}</small>}
            </div>
            <div className="mb-3 position-relative">
              <label className="form-label">Password:</label> 
              <div className="position-relative">
              <input type={passwordVisible ? "text" : "password"} className="form-control pe-5"  id="password"  value={password}  onChange={this.handleChange}  placeholder="Password"/>
            <i className={`fa ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'} position-absolute end-0 top-50 translate-middle-y me-3`} style={{ cursor: "pointer" }}  onClick={this.togglePasswordVisibility}></i>
           </div>
           {errors.password && <small className="text-danger">{errors.password}</small>}
          </div>

            <div className="mb-3 position-relative">
              <label className="form-label">Confirm Password:</label>
            <div className="position-relative">
              <input type={confirmPasswordVisible ? "text" : "password"}  className="form-control pe-5"  id="confirmPassword"  value={confirmPassword}  onChange={this.handleChange}  placeholder="Confirm Password"/>
              <i className={`fa ${confirmPasswordVisible ? 'fa-eye-slash' : 'fa-eye'} position-absolute end-0 top-50 translate-middle-y me-3`} style={{ cursor: "pointer" }}  onClick={this.toggleConfirmPasswordVisibility}> </i>
            </div>
              {errors.confirmPassword && <small className="text-danger">{errors.confirmPassword}</small>}
            </div>


            <div className="mb-3">
              <label className="form-label">Address:</label>
              <textarea type="text" className="form-control" id="address" value={address} onChange={this.handleChange} placeholder="Address"/>
              {errors.address && <small className="text-danger">{errors.address}</small>}
            </div>

            <div className="mb-3">
            <label className="form-label">Role:</label>
            <select className="form-control" id="role" value={this.state.role} onChange={this.handleChange}>
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
            {this.state.errors.role && <small className="text-danger">{this.state.errors.role}</small>}
          </div>



            <button type="submit" className="btn btn-primary mt-1">Submit</button>
          </form>
          <p className="text-center mt-3">
            Already have an account? <a href="#" onClick={() => this.setState({navigateToSignin: true })}className="text-primary">Sign in</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Register;
