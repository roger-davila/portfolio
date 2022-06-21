import { Link } from "react-router-dom";
import { LightIcon } from "../PortfolioIcons/PortfolioIcons";
import './DesktopNav.css';
export default function DesktopNav() {
  return (
    <nav className='DesktopNav'>
      <Link className='NavBar-item' to="/">Home</Link>
      <Link className='NavBar-item' to="/work">Work</Link>
      <Link className='NavBar-item' to="/resume">Resume</Link>
      <LightIcon classString='button nav-icon' />
    </nav>
  );
}