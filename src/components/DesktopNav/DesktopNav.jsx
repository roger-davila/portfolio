import { Link } from "react-router-dom";
import { LightIcon, GitHubIcon, LinkedInIcon } from "../PortfolioIcons/PortfolioIcons";
import './DesktopNav.css';
export default function DesktopNav({ toggleTheme }) {
  return (
    <nav className='DesktopNav'>
      <div className='nav-group'>
        <Link className='NavBar-item' to="/">Home</Link>
        <Link className='NavBar-item' to="/work">Work</Link>
        <Link className='NavBar-item' to="/resume">Resume</Link>
        <a className='nav-flex-link' href='https://github.com/roger-davila' target='_blank'>
          <GitHubIcon classString='button nav-icon NavBar-item'/>
        </a>
        <a className='nav-flex-link' href='https://www.linkedin.com/in/roger-davila/' target='_blank'>
          <LinkedInIcon classString='button nav-icon NavBar-item' />
        </a>
      </div>
      <LightIcon classString='button nav-icon' handleClick={toggleTheme} />
    </nav>
  );
}