import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Name from './Component/Name';


function App() {
  return (
   <>
    <BrowserRouter>
    <Routes>
      <Route path='/name' element={<Name/>}></Route>
    {/* <Route path='/login' element={<Login/>}/> */}
    </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
