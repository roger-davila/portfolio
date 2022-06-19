import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import WorkPage from '../WorkPage/WorkPage';
import NavBar from '../../components/NavBar/NavBar';
import HeroName from '../../components/HeroName/HeroName';
import './App.css';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<HeroName />}/>
        <Route path='/work' element={<WorkPage />}/>
        {/* Route components in here */}
      </Routes>
    </main>
  );
}

export default App;
