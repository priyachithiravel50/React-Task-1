import React, { Component } from 'react';
import { TextField, Checkbox, Button, Typography, Link, FormControlLabel, Box, Paper, Grid } from '@mui/material';

class SignUpForm extends Component {
  handleSignIn = () => {
    this.setState({}, () => {
      window.location.href = '/signup';
    });
  };
  state = {
    name: '',
    password: '',
    agree: false,
  };

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    this.setState({ [name]: type === 'checkbox' ? checked : value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <Grid container justifyContent="center" alignItems="center" minHeight="100vh" style={{ backgroundColor: '#01419c' }}>
        <Paper elevation={10} style={{ padding: '30px', borderRadius: '30px', maxWidth: '1100px', width: '100%', backgroundColor: '#e2edff',height:'500px' }}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box width="50%">
              <Typography variant="h4" gutterBottom>Sign in</Typography>
              <Typography variant="body2">Already have an account? <Link href="#" onClick={() => this.handleSignIn()}>Login here</Link>
              </Typography>

              <form onSubmit={this.handleSubmit} style={{ marginTop: '20px', borderRadius: '25px', fontFamily:'Georgia' }}>
                <TextField
                  label="Name"
                  name="name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={this.state.name}
                  onChange={this.handleChange}
                  required
                />
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={this.state.password}
                  onChange={this.handleChange}
                  required
                />
                <FormControlLabel
                  control={<Checkbox name="agree" color="primary" checked={this.state.agree} onChange={this.handleChange} />}
                  label="By signing up you agree to receive updates and special offers."
                />
                <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '50px', borderRadius: '25px',backgroundColor:'#01419c', fontFamily:'Georgia' }}>Submit</Button>
              </form>
            </Box>

            <Box width="50%" display="flex" justifyContent="center" alignItems="center"> 
              <img src='/Assets/image.jpg' alt="Illustration" style={{ maxWidth: '80%', borderRadius: '30px', fontFamily:'Georgia' }} />
            </Box>
          </Box>
        </Paper>
      </Grid>
    );
  }
}

export default SignUpForm;
