import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/navbar.jsx';
import Home from './components/home.jsx';
//import { Navbar } from 'keep-react';
import Events from './components/Events.jsx';
import Footer from './components/footer.jsx';
import Login from './components/Login.jsx';
import AboutUs from './components/AboutUs.jsx'; 
import Create from './components/EventCreation.jsx'
import { BrowserRouter ,Outlet,Route,Routes } from 'react-router-dom';


//import Card from './components/Card';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
<BrowserRouter>
 
  <Routes>
   <Route path='/' element={<><Navbar/><Home/><Footer/></>}></Route>
   <Route path='/home'element={<><Navbar/><Home/><Footer/></>}></Route>
   <Route path='/login' element={<><Navbar/><Login/></>}></Route>
   <Route path='/Events' element={<><Navbar/><Events/><Footer/></>}></Route>
   <Route path='/AboutUs' element={<><Navbar/><AboutUs/><Footer/></>}></Route>
   <Route path='/EventCreation' element={<><Navbar/><Create/><Footer/></>}></Route>
  </Routes>
  <Outlet/>
 </BrowserRouter>
);

