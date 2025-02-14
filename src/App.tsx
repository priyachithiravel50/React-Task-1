import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './Component/Signup';
import Signin from './Component/Signin';
import Profile from './Component/Profile';
import Admin from './Component/Admin';
import User from './Component/User';
import Landing from './Component/Landing';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/profile' element={<Profile />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/user' element={<User />} />
          <Route path='/landing' element={<Landing />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
