import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';
import './index.css';
import { Players } from './views/players/Players';
import { Tournaments } from './views/tournaments/Tournaments';

function App() {
  return (
    <>
      <Header />
      <div className="body flex justify-center bg-gray-200">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tournaments' element={<Tournaments />}>
            <Route path='upcoming' element={<Tournaments />} />
            <Route path='active' element={<Tournaments />} />
            <Route path='finished' element={<Tournaments />} />
          </Route>
          <Route path='/players' element={<Players />} />
        </Routes>
      </div>
    </>
  );
}

export default App;