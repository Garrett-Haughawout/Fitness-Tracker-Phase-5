import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';


function Header() {
  return (
    <header className='header-container'>
      <nav className='header-navbar'>
        <ul className='header-link-container'>
          <li className='header-link'><Link to="/">Home</Link></li>
          <li className='header-link'><Link to="/workouts">Workout Log</Link></li>
          <li className='header-link'><Link to="/friends">Friends</Link></li>
          <li className='header-link'><Link to="/register">Register</Link></li>
          <li className='header-link'><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;