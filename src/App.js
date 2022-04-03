import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import CardPage from './pages/CardPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Footer from './components/Footer';
import Users from './components/Users';
import CardPage2 from './pages/CardPage2';
import TestCardPage from './pages/TestCardPage';

import Profile from './components/Profile';

import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isLoading, error } = useAuth0();

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user/:id' element={<CardPage />} />
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/CardPage' element={<CardPage />} />
        <Route path='/CardPage2' element={<CardPage2 />} />
        <Route path='/TestCardPage' element={<TestCardPage />} />
        <Route path='/Users' element={<Users />} />
        <Route path='/Profile' element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
