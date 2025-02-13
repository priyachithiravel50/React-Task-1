import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

// ... (rest of the imports)

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // Center content horizontally
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[2],
  width: 570, // Set the desired width here!
  margin: '0 auto', // Center the Box itself horizontally
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  width: '100%',
}));

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      agreeToUpdates: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // Handle form submission here (e.g., send data to API)
    console.log(this.state);
  }

  render() {
    return (
      <StyledBox> {/* Use the styled Box component */}
        <Typography variant="h5" gutterBottom>Sign Up</Typography>

        <Typography variant="body2" color="text.secondary" align="center" gutterBottom>
          Already have an account? <a href="#">Login here</a>
        </Typography>

        <form onSubmit={this.handleSubmit} style={{ width: '100%' }}> {/* Form occupies full width */}
          <StyledTextField 
            label="Name" 
            type="text" 
            name="name" 
            value={this.state.name} 
            onChange={this.handleChange} 
            required 
            halfWidth // Ensure TextField takes full width
          />
          <StyledTextField 
            label="Email Id" 
            type="email" 
            name="email" 
            value={this.state.email} 
            onChange={this.handleChange} 
            required 
            fullWidth // Ensure TextField takes full width
          />
          <StyledTextField 
            label="Password" 
            type="password" 
            name="password" 
            value={this.state.password} 
            onChange={this.handleChange} 
            required 
            fullWidth // Ensure TextField takes full width
          />

          <FormControlLabel
            control={<Checkbox 
              name="agreeToUpdates" 
              checked={this.state.agreeToUpdates} 
              onChange={this.handleChange} 
            />}
            label="By signing up you agree to receive updates and special offers."
          />
          
          <Button variant="contained" color="primary" type="submit"  fullWidth>
            Submit
          </Button>
        </form>
      </StyledBox>
    );
  }
}

export default SignUpForm;