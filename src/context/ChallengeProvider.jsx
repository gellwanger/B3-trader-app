import React, { useEffect, useState } from 'react';
import ChallengeContext from './ChallengeContext';

function ChallengeProvider({ children }) {
  const [newBalance, setNewBalance] = useState(500);

  useEffect(() => {
    localStorage.setItem('balance', JSON.stringify({ saldo: newBalance }));
  }, [newBalance])

 const contextValue = {
   newBalance,
   setNewBalance,
 };

 return (
   <ChallengeContext.Provider value={ contextValue }>
     {children}
   </ChallengeContext.Provider>
 );
}

export default ChallengeProvider;
