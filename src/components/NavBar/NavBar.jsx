import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, LightIcon, XIcon } from '../PortfolioIcons/PortfolioIcons';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function handleClick() {
    setIsNavOpen(!isNavOpen);
  }
  // function handleLogOut() {
  //   // Remove token using the user service
  //   userService.logOut();
  //   // Update user state in App
  //   setUser(null);
  // }

  return (
    <>
      <nav className={`NavBar ${isNavOpen ? 'active' : ''}`}>
        <XIcon classString='close button nav-icon' handleClick={handleClick} />
        <Link className='NavBar-item' onClick={handleClick} to="/">Home</Link>
        <Link className='NavBar-item' onClick={handleClick} to="/work">Work</Link>
        <Link className='NavBar-item' onClick={handleClick} to="/resume">Resume</Link>
      </nav>
      <div className='NavBar-wrapper'>
        <MenuIcon classString='open button nav-icon' handleClick={handleClick} />
        <LightIcon classString='button nav-icon' />
      </div>
    </>
  );
}