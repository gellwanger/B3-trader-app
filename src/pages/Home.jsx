import React, { useEffect, useState } from 'react';
import Input from '../components/Input';
import getCompany from '../services/index';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const find = async () => {
      const take = await getCompany('alup11');
      setData(take);
      console.log(take[0])
    }
    find();
  }, []);

  return (
    <>
      <h1>Trader Plataform 1.0</h1>
      <Input />
    </>
  );
}

export default Home;
