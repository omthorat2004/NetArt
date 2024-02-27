import React from 'react';
import logo from '../../assets/logo.png';
import './navbar.css';
const Navbar = () => {
  return (
    <div className='flex items-center items-center justify-center'>
        <img src={logo} className='logo' /> 
    </div>
  );
}

export default Navbar;
