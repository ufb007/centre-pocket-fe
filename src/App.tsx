import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Login } from './components/auth/Login';
import './index.css';
import { Players } from './views/players/Players';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/players' element={<Players />} />
      </Routes>
    </>
  );
}

export default App;