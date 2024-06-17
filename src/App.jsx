import './App.css';
import Home from './pages/home/Home';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './pages/login/Login';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from './Firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Player from './pages/player/Player';
import Player2 from './pages/player2/Player2';
import Player3 from './pages/player3/Player3';
import Player4 from './pages/player4/Player4';
import Player5 from './pages/player5/Player5';
import Player6 from './pages/player6/Player6';
import Player7 from './pages/player7/Player7';
import Player8 from './pages/player8/Player8';
import Play from './pages/home/play/Play';



function App() {

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("Logged In");
        navigate('/');
      } else {
        console.log("Logged Out")
        navigate('/login');

      }
    })
  }, [])

  return (
    <div className="App">
      <ToastContainer theme='dark' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/player/:id' element={<Player />} />
        <Route path='/player2/:id' element={<Player2 />} />
        <Route path='/player3/:id' element={<Player3 />} />
        <Route path='/player4/:id' element={<Player4 />} />
        <Route path='/player5/:id' element={<Player5 />} />
        <Route path='/player6/:id' element={<Player6 />} />
        <Route path='/player7/:id' element={<Player7 />} />
        <Route path='/player8/:id' element={<Player8 />} />
        <Route path='/player20/:id' element={<Play/>} />
      </Routes>
    </div>
  );
}

export default App;
