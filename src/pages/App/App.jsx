import { useState, useEffect, useRef} from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import ScrollToTop from '../../components/ScrollToTop';
import AuthPage from '../AuthPage/AuthPage';
import WorkPage from '../WorkPage/WorkPage';
import ResumePage from '../ResumePage/ResumePage';
import NavBar from '../../components/NavBar/NavBar';
import DesktopNav from '../../components/DesktopNav/DesktopNav';
import HeroName from '../../components/HeroName/HeroName';
import Footer from '../../components/Footer/Footer';
import './App.css';

function App() {
  const MOBILE_NAV_WIDTH = 640; // Screen width to begin using mobile nav
  // const [user, setUser] = useState(getUser());
  const toggled = useRef(false);
  const [theme, setTheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const [windowSize, setWindowSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });
  // Keep track of window size for layout changes
  useEffect(() => {
    function handleColorChange(evt) {
      console.log(evt.target.matches);
      setTheme(evt.target.matches ? 'dark' : 'light');
    }

    const colorQuery = window.matchMedia('(prefers-color-scheme: dark)');
    colorQuery.addEventListener('change', handleColorChange);

    document.documentElement.setAttribute('data-theme', theme);
    
    console.log(colorQuery);
    return () => colorQuery.removeEventListener('change', handleColorChange);
  }, [theme]);

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function toggleTheme() {
    const option = theme === 'dark' ? 'light' : 'dark';
    setTheme(option);
    document.documentElement.setAttribute('data-theme', option);
  }

  return (
    <main className='App'>
      {windowSize.width < MOBILE_NAV_WIDTH ? <NavBar toggleTheme={toggleTheme} /> : <DesktopNav toggleTheme={toggleTheme} />}
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<HeroName />} />
          <Route path='/work' element={<WorkPage />} />
          <Route path='/resume' element={<ResumePage />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </main>
  );
}

export default App;
