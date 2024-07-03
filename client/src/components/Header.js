import React from 'react';
import { Link } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';
import '../styles/Header.css';

function Header({ user, handleLogout }) {
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
          <li className='header-link'>
            <Link to='/goals'>Goals</Link>
          </li>
          <li className='header-logout-button'>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
        <div className='header-profile-pic'>
          <Link to='/profile'><img className='header-profile-img' src={user.profile_pic} alt='profile-pic' /></Link>
        </div>
      </nav>
      <HamburgerMenu />
    </header>
  );
}

export default Header;
