import React from 'react';

function Home() {
  const getEmail = localStorage.getItem('user')
  const email = JSON.parse(getEmail).email

  return <h1>Olá {email}</h1>
}

export default Home;
