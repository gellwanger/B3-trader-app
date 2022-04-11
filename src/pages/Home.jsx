import React, { useState } from 'react';
import getCompany from '../services/index';

function Home() {
  const [stock, setStock] = useState([]);
  const [quantity, setQuantity] = useState([]);

  const handleStock = ({ target }) => {
    setStock({ [target.name]: target.value });
  }

  const handleQuantity = ({ target }) => {
    setQuantity({ [target.name]: target.value });
  }

  const getAPI = async () => {
    const aqui = await getCompany(stock.stock);
    console.log('aqui')
    console.log(aqui[0].vl_medio)
    return aqui;
  }

  const handleClick = () => {
    onclick();
    getAPI();
    console.log('clique')
    console.log(stock.stock)
  }

  const findCompany = () => {
    if (stock.stock === getAPI) return console.log('Acerto miserávi')
    return console.log('Errou!!!')
  }

  const onclick = () => {
    const number = Math.round((Math.random() * 100));
    // findCompany();
    // getAPI();
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
