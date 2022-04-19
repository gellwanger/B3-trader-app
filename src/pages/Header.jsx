import React from 'react';
import stock_image from '../stock_image.webp';

function Home() {
  const getEmail = localStorage.getItem('user')
  const email = JSON.parse(getEmail).email;

  const setBalance = localStorage.getItem('balance')
  const balance = JSON.parse(setBalance).saldo;

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
          Hi, {balance}!
        </h1>
      </div>
    </>
  );
}

export default Home;
