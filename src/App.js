import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Component.js/Login'

function App() {
  return (
   <>
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
