import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';

class Admin extends Component {
  render() {
    return (
      <Box>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1, fontFamily: 'Georgia' }}>
              Admin Dashboard
            </Typography>
            <Button color="inherit">My Profile</Button>
            <Button color="inherit">Settings</Button>
            <Button color="inherit">User</Button>
          </Toolbar>
        </AppBar>
        <Box p={3}>
          <Typography variant="h4" fontFamily={'Georgia'}>
            Welcome, Admin!
          </Typography>
        </Box>
      </Box>
    );
  }
}

export default Admin;
