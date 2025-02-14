import React, { Component, ChangeEvent, FormEvent } from 'react';
import { TextField, Checkbox, Button, Typography, Link, FormControlLabel, Box, Paper, Grid, MenuItem } from '@mui/material';
import { Navigate } from 'react-router-dom';

// Props Type Definition (No Props so empty)
type Props = {};

// State Type Definition
type State = {
  name: string;
  email: string;
  phoneno: string;
  password: string;
  role: string;
  agree: boolean;
  redirect: boolean;
};

class Signup extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phoneno: '',
      password: '',
      role: '',
      agree: false,
      redirect: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = event.target;
    this.setState({ [name]: type === 'checkbox' ? checked : value } as unknown as Pick<State, keyof State>);
  }

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(this.state);

    if (this.state.role === 'admin') {
      this.setState({ redirect: true });
    }
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to="/Admin" />;
    }

    return (
      <Grid 
        container 
        justifyContent="center" 
        alignItems="center" 
        minHeight="100vh" 
        style={{ backgroundColor: '#01419c' }}
      >
        <Paper 
          elevation={10} 
          style={{ 
            padding: '30px', 
            borderRadius: '30px', 
            maxWidth: '1100px', 
            width: '100%', 
            backgroundColor: '#e2edff', 
            height: '700px' 
          }}
        >
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box width="50%">
              <Typography variant="h4" fontFamily={'Georgia'} gutterBottom>
                Sign Up
              </Typography>
              <Typography variant="body2" fontFamily={'Georgia'}>
                Already have an account? 
                <Link href="/signin">Login here</Link>
              </Typography>

              <form 
                onSubmit={this.handleSubmit} 
                style={{ 
                  marginTop: '20px', 
                  borderRadius: '25px', 
                  fontFamily: 'Georgia' 
                }}
              >
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
                  label="Email" 
                  name="email" 
                  variant="outlined" 
                  fullWidth 
                  margin="normal" 
                  value={this.state.email} 
                  onChange={this.handleChange} 
                  required 
                />
                <TextField 
                  label="Phone No" 
                  name="phoneno" 
                  variant="outlined" 
                  fullWidth 
                  margin="normal" 
                  value={this.state.phoneno} 
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

                <TextField
                  select
                  label="Role"
                  name="role"
                  value={this.state.role}
                  onChange={this.handleChange}
                  fullWidth
                  margin="normal"
                  required
                >
                  <MenuItem value="admin">Admin</MenuItem>
                  <MenuItem value="user">User</MenuItem>
                </TextField>

                <FormControlLabel
                  control={
                    <Checkbox 
                      name="agree" 
                      color="primary"  
                      checked={this.state.agree} 
                      onChange={this.handleChange} 
                    />
                  }
                  label="By signing up you agree to receive updates and special offers."
                />

                <Button 
                  type="submit" 
                  variant="contained" 
                  color="primary" 
                  fullWidth 
                  style={{ 
                    marginTop: '50px', 
                    borderRadius: '25px', 
                    backgroundColor: '#01419c', 
                    fontFamily: 'Georgia' 
                  }}
                >
                  Submit
                </Button>
              </form>
            </Box>
            <Box width="50%" display="flex" justifyContent="center" alignItems="center"> 
              <img 
                src='/Assets/image.jpg' 
                alt="Illustration" 
                style={{ 
                  width: '100%',  
                  borderRadius: '30px' 
                }} 
              />
            </Box>
          </Box>
        </Paper>
      </Grid>
    );
  }
}

export default Signup;
