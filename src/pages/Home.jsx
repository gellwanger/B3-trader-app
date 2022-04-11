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

  const getCompanyAPI = async () => {
    const allCompanys = await getCompany();
    console.log(allCompanys[0].cd_acao)
    return allCompanys;
  }

  const getStockAPI = async () => {
    const company = await getStock(stock.stock);
    console.log(company[0])
    return company;
  }

  const handleClick = () => {
    // getCompanyAPI();
    // getStockAPI();
    findCompany();
    onclick();
  }

  const findCompany = async () => {
    const allCompanys = await getCompany();
    const company = await getStock(stock.stock);

    const arrayCompany = allCompanys[0].cd_acao;
    const specifyCompany = company[0].cd_acao;

   const compareTickers = allCompanys.find((element) => element.cd_acao === specifyCompany).cd_acao;
   return console.log('Deu certo: ', compareTickers);
  }

  const onclick = () => {
    const number = Math.round((Math.random() * 100));
    return number;
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
