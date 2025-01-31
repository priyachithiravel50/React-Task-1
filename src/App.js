import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Signin from './Component/Signin';
import Signup from './Component/Signup';
import Profile from './Component/Profile';


function App() {
  return (
   <>
    <BrowserRouter>
    <Routes>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/signin' element={<Signin/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
    </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
