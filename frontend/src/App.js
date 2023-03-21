import React, { useEffect } from 'react';
import { Menu } from './components/menu/menu';
import {BrowserRouter as Router, Routes, Route, redirect} from 'react-router-dom'
//
// Pages
//
import { Goals } from './pages/goals/goals';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Profile } from './pages/profile/profile';
import { RequireAuth, RequireNoAuth } from './redux/requireAuth/requireAuth';


import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import './App.scss'
import { NotFound } from './pages/notFound/notFound';

import {useSelector, useDispatch} from 'react-redux';
import { reduceTime } from './redux/auth/authSlice';
import { validateMe } from './redux/auth/authActions';
import { Spinner } from './components/spinner/spinner';

const App = () => {
  const authSelector = useSelector( state => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    if (typeof window !== "undefined") {
      setInterval(() => {
        dispatch(reduceTime()) 
      }, 1000);
    }

    if(authSelector.userToken) {
      dispatch(validateMe(authSelector.userToken))
    }
  }, [])





  return (
    <>
      <Router>
        <Menu />
          <div className='body-wrapper'>
            <Routes>
              <Route path='/' element={<Home/>} />

              {/* Required to be not logged in */}
              <Route element={<RequireNoAuth />}>
                <Route path='/login' element={<Login/>} />
              </Route>

              <Route element={<RequireNoAuth />}>
                <Route path='/register' element={<Register/>} />
              </Route>

              {/* Required to be logged in */}
              <Route element={<RequireAuth />}>
                <Route path='/goals' element={<Goals/>} />
              </Route>

              <Route element={<RequireAuth />}>
                <Route path='/profile/' element={<Profile/> } />
              </Route>

          	  <Route path="*" element={<NotFound />} />

            </Routes>
          </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
