import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';


function Header() {
  return (
    <header className='header-container'>
      <div className='header-left-content'>
        <h1 className='header-title'>Workout Tracker</h1>
      </div>
      <nav className='header-navbar'>
        <ul className='header-link-container'>
            <li className='header-link'>
                <Link to='/'>Home</Link>
            </li>
            <li className='header-link'>
                <Link to='/workouts'>Workouts</Link>
            </li>
            <li className='header-link'>
                <Link to='/friends'>Friends</Link>
            </li>
            <li className='header-link'>
                <Link to='/profile'>Profile</Link>
            </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;