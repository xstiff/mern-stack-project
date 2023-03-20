import React from 'react';
import { Menu } from './components/menu/menu';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//
// Pages
//
import { Goals } from './pages/goals/goals';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Profile } from './pages/profile/profile';
import { Logout } from './pages/logout/logout';

import { RequireAuth } from './redux/requireAuth/requireAuth';


import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import './App.scss'

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

              <Route element={<RequireAuth />}>
                <Route path='/goals' element={<Goals/>} />
              </Route>

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
