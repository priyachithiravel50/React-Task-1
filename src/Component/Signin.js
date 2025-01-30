import React, { Component } from "react";
import "./signin.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Password: "",
      errors: {},
      showPassword: false,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  // Form validation function
  validateForm = () => {
    let errors = {};
    if (!this.state.Name.trim()) errors.Name = "Username is required";
    if (!this.state.Password.trim()) errors.Password = "Password is required";
    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validateForm();
    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
      return;
    }

    // No credential validation, just alert and navigate
    alert("Login Successful!");
    // Redirect to a dashboard or home page
    this.props.navigate("/home");

    // Reset form
    this.setState({ Name: "", Password: "", errors: {} });
  };

  togglePassword = () => {
    this.setState((prevState) => ({ showPassword: !prevState.showPassword }));
  };

  render() {
    return (
      <div className="text">
        <h1 style={{ color: "#203864", marginLeft: "80px" }}>Login Form</h1>
        <div>
        <div style={{ marginBottom: "15px", textAlign: "left" }}>
          <label id="label">Name:</label>
          <input
            type="text"
            id="Name"
            placeholder="Name"
            value={this.state.Name}
            onChange={this.handleChange}
            required
          />
          {this.state.errors.Name && <span style={{ color: "red" }}>{this.state.errors.Name}</span>}
        </div>

        <div style={{ marginBottom: "15px", textAlign: "left" }}>
          <label>Password:</label>
          <div style={{ position: "relative" }}>
            <input
              type={this.state.showPassword ? "text" : "password"}
              id="Password"
              placeholder="Password"
              autoComplete="off"
              value={this.state.Password}
              onChange={this.handleChange}
            />
            <i
              className={`fa ${this.state.showPassword ? "fa-eye-slash" : "fa-eye"}`}
              onClick={this.togglePassword}
              id="show"
            />
          </div>
          {this.state.errors.Password && <span style={{ color: "red" }}>{this.state.errors.Password}</span>}
        </div>
        </div>

        <div style={{ marginBottom: "15px", textAlign: "left" }}>
          <label className="check">
            <input type="checkbox" id="box" /> I agree to the{" "}
            <a href="#" style={{ textDecoration: "underline", color: "blue" }}>
              terms and conditions
            </a>{" "}
            .
          </label>
        </div>

        <button className="submit" onClick={this.handleSubmit}>
          Submit
        </button>
        <p style={{ marginLeft: "60px", marginTop: "15px", display: "flex" }}>
          Don't have an account?{" "}
          <a href="#" onClick={() => this.props.navigate("/signup")}>
            Sign Up
          </a>
        </p>
      </div>
    );
  }
}

export default Login;
