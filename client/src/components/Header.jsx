import React from 'react'
import { Link } from 'react-router-dom'
import './style.css';

const Header = () => {
  return (
    <div className='header'>
        <div className="logo">
            <h1>Tasty<span>Bites</span></h1>
        </div>
        <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/">Food</Link>
            <Link to="/">Serives</Link>
            <Link to="/">About Us</Link>
            <Link to="/">Contact</Link>
            <Link to="/admin">Admin</Link>
        </div>
        <div className="btns">
            <button>Login</button>
        </div>
    </div>
  )
}

export default Header