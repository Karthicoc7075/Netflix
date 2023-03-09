import React, { useEffect, useReducer, useState } from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route,Navigate } from 'react-router-dom';
import SignUp from './pages/Auth/signUp/signUp';
import Login from './pages/Auth/login/login';
import Registration from './pages/Auth/registration/registration';
import RegForm from './pages/Auth/regform/regform';
import SignIn from './pages/Auth/signIn/signIn';
import HomePage from './pages/HomePage/homePage';
import Card from './components/card/card';
import Profile from './components/profile/profile';
import ManageProfile from './components/profile/manageProfile';
import EditProfile from './components/profile/editProfile';
import Account from './components/account/account';
import Planform from './components/planform/palnform';
import Slider from './components/slider/slider';
import NotFound from './pages/notFound/notFound';
import { useSelector } from 'react-redux';
import Test from './components/test/slider';
// import {login} from './action/action';
// import {useDispatch} from 'react-redux';

function App() {
  // const [form,setForm] = useState({username:'Karthi',password:'123456789',email:'Karthi_7075@gmail.com'})
  // const dispatch = useDispatch();

//   useEffect(()=>{
//   console.log('start');
//       dispatch(login(form));
//       console.log('end');
// },[])
const [user,setUser] = useState(null);

useEffect(()=>{
  setUser(JSON.parse(localStorage.getItem('authReducer'))?.user)
},[localStorage.getItem('authReducer')])



  return (
    <Router>
      <Routes>
      {/* <Route path='*' element={<NotFound/>} />
      
      <Route path='/planform' element={<Planform/>} />
      <Route path='/brower/Account' element={<Account/>} />
      <Route path='/manage-profiles/:id' element={<EditProfile/>} />
      <Route path='/manage-profiles' element={<ManageProfile/>} />
      <Route path='/profiles' element={<Profile/>} />
        <Route path='/card' element={<Card/>} />
      <Route path="/netflix" element={<HomePage/>} />
        <Route path="/" element={<SignUp/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signUp/registration" element={<Registration/>}/>
        <Route path="/signUp/regform" element={<RegForm/>}/>
        <Route path="/signIn/password?" element={<SignIn/>}/> */}
    <Route path='/slider' element={<Test/>} />
      <Route path='*' element={<NotFound/>} />
      <Route path='/' element={user ? <Navigate to='/brower' />:<SignUp/>}/>
      <Route exact path='/brower' element={user ? <HomePage/> : <Navigate to='/'/>} />
      <Route  path='/brower/account' element={user ? <Account/> : <Navigate to='/'/>} />
      <Route  path='/manage-profiles' element={user ? <ManageProfile/> : <Navigate to='/'/>} />
      <Route  path='/profiles' element={user ? <Profile/> : <Navigate to='/'/>} />
       <Route path="/" element={<SignUp/>} />
       <Route path="/login" element={<Login/>}/>
        <Route path="/signUp/registration" element={<Registration/>}/>
        <Route path="/signUp/regform" element={<RegForm />}/>
        <Route path="/signIn/password?" element={<SignIn/>}/>
      </Routes>
    </Router>
  );
}

export default App;
