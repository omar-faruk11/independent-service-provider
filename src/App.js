import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './Pages/AboutMe/AboutMe';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import LogIn from './Pages/LogIn/LogIn';
import NotMatch from './Pages/NotMatch/NotMatch';
import Register from './Pages/Register/Register';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Chackout from './Pages/Chackout/Chackout';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='Blogs' element={<Blogs></Blogs>}></Route>
        <Route path='about' element={<AboutMe></AboutMe>}></Route>
        <Route path='login' element={<LogIn></LogIn>}></Route>
        <Route path='register' element={<Register></Register>}></Route>
        <Route path='chackout' element={
          <RequireAuth>
              <Chackout></Chackout>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotMatch></NotMatch>}></Route>
      </Routes>
    </>
  );
}

export default App;
