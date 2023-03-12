import React from 'react';
import { Menu } from './components/menu/menu';
import { Alert } from './components/alert/alert';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// Pages
import { Goals } from './pages/goals/goals';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Profile } from './pages/profile/profile';
import { Logout } from './pages/logout/logout';
import { HowItWorks } from './pages/howitworks/howitworks';
import './App.scss'


function App() {
  return (
    <Router>
      <Menu />
      {/* <Alert /> */}
        <div className='body-wrapper'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/goals' element={<Goals/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/logout' element={<Logout/>} />
            <Route path='/howitworks' element={<HowItWorks/>} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
