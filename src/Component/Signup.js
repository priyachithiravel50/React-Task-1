import React, { Component } from 'react';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      number: '',
      password: '',
      confirmPassword: '',
      address: '',
      errors: {},
      passwordVisible: false,
      confirmPasswordVisible: false,
    };
  }

  
  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  //  Password visibility
  togglePasswordVisibility = () => {
    this.setState((prevState) => ({ passwordVisible: !prevState.passwordVisible }));
  };

  toggleConfirmPasswordVisibility = () => {
    this.setState((prevState) => ({ confirmPasswordVisible: !prevState.confirmPasswordVisible }));
  };

  // Validation
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

  // Handle form submission
  handleSubmit = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if (!isValid) return;
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      number: '',
      password: '',
      confirmPassword: '',
      address: '',
    });
  };

  render() {
    const { firstName, lastName, email, number, password, confirmPassword, address, errors, passwordVisible, confirmPasswordVisible } = this.state;

    return (
      <div className='register'>
        <h1>Register Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>First Name:</label>
            <input type="text"  id="firstName"  value={firstName}  onChange={this.handleChange}  placeholder="First Name"/>
            {errors.firstName && <p>{errors.firstName}</p>}
          </div>

          <div>
            <label>Last Name:</label>
            <input type="text" id="lastName" value={lastName} onChange={this.handleChange} placeholder="Last Name"/>
            {errors.lastName && <p>{errors.lastName}</p>}
          </div>

          <div>
            <label>Email:</label>
            <input type="email" id="email" value={email} onChange={this.handleChange} placeholder="Email"/>
            {errors.email && <p>{errors.email}</p>}
          </div>

          <div>
            <label>Phone no:</label>
            <input type="number" id="number" value={number} onChange={this.handleChange} placeholder="Phone no"/>
            {errors.number && <p>{errors.number}</p>}
          </div>

            <div>
            <label>Password:</label>
            <div>
              <input type={passwordVisible ? 'text' : 'password'} id="password" value={password} onChange={this.handleChange} placeholder="Password"/>
              <i className={`fa ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'}`} id='show' onClick={this.togglePasswordVisibility}/>
            </div>
            {errors.password && <p>{errors.password}</p>}
          </div>

          <div>
            <label>Confirm Password:</label>
            <div>
              <input type={confirmPasswordVisible ? 'text' : 'password'} id="confirmPassword" value={confirmPassword} onChange={this.handleChange} placeholder="Confirm Password"/>
              <i className={`fa ${confirmPasswordVisible ? 'fa-eye-slash' : 'fa-eye'}`} id='show' onClick={this.toggleConfirmPasswordVisibility} />
            </div>
            {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
          </div>

          <div>
            <label>Address:</label>
            <input type="text" id="address" value={address} onChange={this.handleChange} placeholder="Address"/>
            {errors.address && <p>{errors.address}</p>}
          </div>

          <button type="submit" className='button1'>Submit</button>
        </form>
      </div>
    );
  }
}

export default Register;
