import React from 'react';
import stock_image from '../stock_image.webp';

function Home() {
  const getEmail = localStorage.getItem('user')
  const email = JSON.parse(getEmail).email

  return (
    <>
      <img 
        alt='header'
        className='header_image'
        src={ stock_image }
      />
      <h1
        className='message'
      >
        Olá {email}!
      </h1>
    </>
  );
}

export default Home;
