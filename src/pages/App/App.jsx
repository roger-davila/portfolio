import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import WorkPage from '../WorkPage/WorkPage';
import NavBar from '../../components/NavBar/NavBar';
import DesktopNav from '../../components/DesktopNav/DesktopNav';
import HeroName from '../../components/HeroName/HeroName';
import './App.css';

function App() {
  const [user, setUser] = useState(getUser());
  const [theme, setTheme] = useState('dark');
  const [windowSize, setWindowSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  // Keep track of window size for layout changes
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
      {windowSize.width < 960 ? <NavBar toggleTheme={toggleTheme} /> : <DesktopNav toggleTheme={toggleTheme} />}
      <Routes>
        <Route path='/' element={<HeroName />} />
        <Route path='/work' element={<WorkPage />} />
        {/* Route components in here */}
      </Routes>
    </main>
  );
}

export default App;
