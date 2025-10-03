import React from 'react'
import Navbar from "./component/Navbar/navbar.jsx";
import Banner from './component/Banner/banner.jsx';
import Menu from './pages/menu.jsx';
import { Route,Routes } from 'react-router-dom';
import Login from './pages/login.jsx';
import Cart from './pages/cart.jsx'

const App = () => {
  return (
      <div className=''>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/navbar' element={<Navbar/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </div>
      
      
      
  )
}

export default App
