import React, { useState } from 'react';
import getCompany from '../services/index';

function Home() {
  const [data, setData] = useState([]);
  const [stock, setStock] = useState([]);
  const [quantity, setQuantity] = useState([]);
  
  // useEffect(() => {
  //   const find = async () => {
  //     const take = await getCompany();
  //     setData(take);
  //     console.log(data[0])
  //   }
  //   find();
  // });

  const handleStock = ({ target }) => {
    setStock({ [target.name]: target.value });
  }

  const handleQuantity = ({ target }) => {
    setQuantity({ [target.name]: target.value });
  }

  const handleClick = () => {
    onclick();
  }

  const onclick = () => {
    const number = Math.round((Math.random() * 100));
    findCompany()
  }

    const findCompany = async () => {
      const take = await getCompany(stock);
      console.log('Stock aqui:', stock)
      setData(take);
      console.log('Take aqui:', take)
  }

  return (
    <>
      <h1>Trader Plataform 1.0</h1>
      <form>
        <div>
          <label
            htmlFor="stock"
            >
            Choose Stock to trade:
            <input
              name="stock"
              id="stock"
              onChange={ handleStock }
              placeholder="PETR4, VALE3, ALUP11, ..."
              type="text"
              />
          </label>
        </div>
        <div>
          <label
            htmlFor="trade"
            >
            Type quantity of stocks to trade:
            <input
              name="trade"
              id="trade"
              onChange={ handleQuantity }
              placeholder="min: 1, max: 100"
              type="number"
              />
          </label>
        </div>
      </form>
      <button
        type={ 'button' }
        onClick={ handleClick }
      >
        Trade
      </button>
    </>
  );
}

export default Home;
