import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Name from './Component/Name';
import Signin from './Component/Signin';
import Signup from './Component/Signup';


function App() {
  return (
   <>
    <BrowserRouter>
    <Routes>
      <Route path='/name' element={<Name/>}></Route>
      <Route path='/signin' element={<Signin/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
    </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
