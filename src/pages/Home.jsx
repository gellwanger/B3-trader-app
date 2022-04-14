import React, { useState } from 'react';
import {getStock, getCompany} from '../services/index';

function Home() {
  const [stock, setStock] = useState([]);
  const [quantity, setQuantity] = useState([]);
  
  const handleStock = ({ target }) => {
    setStock({ [target.name]: target.value });
  }

  const handleQuantity = ({ target }) => {
    setQuantity({ [target.name]: target.value });
  }

  const findCompany = async () => {
    // const allCompanys = await getCompany();
    const company = await getStock(stock.stock);
    const specifyCompany = company[0].cd_acao;

    console.log('specifyCompany', specifyCompany)
    console.log('company: ', company[0])

    const compareTickers = company.find((element) => element.cd_acao === specifyCompany).cd_acao;
    return console.log('Deu certo: ', compareTickers);
  }

  const createRandomNumber = () => {
    const number = Math.round((Math.random() * 100));
    console.log(number)
    return number;
  }

  const handleClick = () => {
    if (stock.length === 0 || quantity.length === 0) {
      return global.alert('Você precisa preencher os dados!')
  }
    else {
      createRandomNumber();
      findCompany();
    }
  }

  return (
    <>
      <h1>Trader Plataform 1.0</h1>
      <form className="w-full max-w-sm">
        <div className="md:flex md:items-center mb-6">
          <label
            className="block text-gray-900 font-bold md:text-right mb-1 md:mb-0 pr-4"
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
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
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
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        type={ 'button' }
        onClick={ handleClick }
      >
        Trade
      </button>
    </>
  );
}

export default Home;
