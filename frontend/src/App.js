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
import './App.scss'
import { Deny } from './pages/deny/deny';

const App = () => {


  return (
    <>
      <Router>
        <Menu />
          <div className='body-wrapper'>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/register' element={
               <Register/>
              } />
              <Route path='/goals' element={
              <Goals/>
              } />
              <Route path='/profile' element={
               <Profile/> } />
              <Route path='/logout' element={
               <Logout/> } />
            </Routes>
          </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
