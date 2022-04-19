import React from 'react';
import Routes from './components/Routes';
import './App.css';
import ChallengeProvider from './context/ChallengeProvider';

function App() {
  return (
    <ChallengeProvider>
      <Routes />
    </ChallengeProvider>  
  );
}

export default App;