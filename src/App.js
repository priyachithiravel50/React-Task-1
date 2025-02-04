import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Signin from './Component/Signin';
import Signup from './Component/Signup';
import Profile from './Component/Profile';
import Admin from './Component/Admin';
import User from './Component/User';


function App() {
  return (
   <>
    <BrowserRouter>
    <Routes>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/signin' element={<Signin/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/admin' element={<Admin/>}></Route>
      <Route path='/user' element={<User/>}></Route>
    </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
