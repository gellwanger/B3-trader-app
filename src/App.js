import React from 'react';
import Routes from './Routes';

import './App.css';

import ChallengeProvider from './context/ChallengeProvider';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <ChallengeProvider>
        <Routes />
      </ChallengeProvider>  
    </BrowserRouter>
  );
}

export default App;