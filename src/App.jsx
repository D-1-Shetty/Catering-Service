import React from 'react'
import Navbar from "./component/Navbar/navbar.jsx";
import Banner from './component/Banner/banner.jsx';
import Menu from './pages/menu.jsx';
import { Route,Routes } from 'react-router-dom';
import Login from './pages/login.jsx';

const App = () => {
  return (
      <div className=''>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/navbar' element={<Navbar/>}/>
    </Routes>
    </div>
      
      
      
  )
}

export default App
