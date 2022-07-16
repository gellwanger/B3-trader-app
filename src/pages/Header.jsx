import React, { useContext } from 'react';
import stock_image from '../images/stock_image.webp';
import ChallengeContext from '../context/ChallengeContext';

function Home() {
  const getEmail = localStorage.getItem('user')
  const email = JSON.parse(getEmail).email;  
  const domain = email.substring(email.indexOf('@'));
  const final = email.length - domain.length;
  const name = email.substring(0, 1).toUpperCase() + email.substring(1, +final);
  
  const { newBalance } = useContext(ChallengeContext);

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
          Hi, {name}!
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
