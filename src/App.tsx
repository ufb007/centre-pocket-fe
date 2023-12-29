import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';
import './index.css';
import { Players } from './views/players/Players';
import { Tournaments } from './views/tournaments/Tournaments';
import { Tournament } from './views/tournaments/Tournament';
import { CreateNew } from './views/tournaments/CreateNew';
import { ApolloProvider } from '@apollo/client';
import client from './libs/graphql'

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className="body flex justify-center bg-gray-200">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/tournaments' element={<Tournaments />}>
              <Route path='upcoming' element={<Tournaments />} />
              <Route path='active' element={<Tournaments />} />
              <Route path='finished' element={<Tournaments />} />
            </Route>
            <Route path='/tournaments/create-new' element={<CreateNew />} />
            <Route path='/tournament/:uuid' element={<Tournament />} /> 
            <Route path='/players' element={<Players />} />
          </Routes>
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;