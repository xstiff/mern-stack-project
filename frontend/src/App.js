import React from 'react';
import { Menu } from './components/menu/menu';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import { Alert } from './components/alert/alert';



//
// Pages
//
import { Goals } from './pages/goals/goals';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Profile } from './pages/profile/profile';
import { Logout } from './pages/logout/logout';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import './App.scss'
import { Deny } from './pages/deny/deny';

const App = () => {
  const { user } = useSelector((state) => state.auth);


  return (
    <>
      <Router>
        <Menu />
          <div className='body-wrapper'>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/login' element={user ? <Deny/> : <Login/>} />
              <Route path='/register' element={
              user ? <Deny/> : <Register/>
              } />
              <Route path='/goals' element={
              user ? <Goals/> : <Deny/>
              } />
              <Route path='/profile' element={
                user ? <Profile/> : <Deny/> } />
              <Route path='/logout' element={
                user ? <Logout/> : <Deny/> } />
            </Routes>
          </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
