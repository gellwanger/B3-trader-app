import React, { useContext } from 'react';
import stock_image from '../images/stock_image.webp';
import ChallengeContext from '../context/ChallengeContext';

function Home() {
  const getEmail = localStorage.getItem('user')
  const email = JSON.parse(getEmail).email;

  const { newBalance } = useContext(ChallengeContext);

  // const setBalance = localStorage.getItem('balance')
  // const balance = JSON.parse(setBalance).saldo;

  return (
    <>
      <img 
        alt='header'
        className='header_image'
        src={ stock_image }
      />
      <div
        className='header_messages'
      >
        <h1
          className='message'
        >
          Hi, {email}!
        </h1>
        <h1
          className='message'
        >
          Your balance is: ${newBalance}
        </h1>
      </div>
    </>
  );
}

export default Home;
