import { Link } from 'react-router-dom';
import { MenuIcon, LightIcon } from '../PortfolioIcons/PortfolioIcons';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar() {

  // function handleLogOut() {
  //   // Remove token using the user service
  //   userService.logOut();
  //   // Update user state in App
  //   setUser(null);
  // }

  return (
    <nav className='NavBar'>
      <MenuIcon />
      <Link className='NavBar-item' to="/">Home</Link>
      <Link className='NavBar-item' to="/work">Work</Link>
      <Link className='NavBar-item' to="/resume">Resume</Link>
      <LightIcon />
    </nav>
  );
}