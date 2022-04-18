import React, { useState } from 'react';
import { getStock } from '../services/index';
import Header from './Header';

function Home() {
  const [stock, setStock] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [list, setList] = useState(['teste']);
  const array = ['Token', 'Data', 'Stock', 'ValueStock', 'ValueTrade', 'Result']
  const columns = Object.values(array);
  let balance = JSON.parse(localStorage.getItem('balance')).saldo;

  const handleStock = ({ target }) => {
    setStock({ [target.name]: target.value });
  }

  const handleQuantity = ({ target }) => {
    setQuantity({ [target.name]: target.value });
  }

  const findCompany = async () => {
    const company = await getStock(stock.stock);
    const specifyCompany = company[0].cd_acao;
    const averageValue = company[0].vl_medio;
    const numberOfStocks = quantity.trade;
    const today = new Date();
    const token = Date.parse(today);
    const formatedDate = ((today.getDate() )) + "/" + ((today.getMonth() + 1)) + "/" + today.getFullYear(); 
    const number = (Math.random() * 100).toFixed(2);
    const result = Number((averageValue - number) * numberOfStocks).toFixed(2);
    console.log('result: ',result)
    balance = (Number(JSON.parse(localStorage.getItem('balance')).saldo) + Number(result)).toFixed(2);
    console.log('balance: ', balance)

    const addItem = () => {
      const newList = {
        Token: token,
        Date: formatedDate,
        Stock: specifyCompany,
        ValueStock: averageValue,
        ValueTrade: number,
        Result: result,
      }
      setList([...list, newList]);
      localStorage.setItem('balance', JSON.stringify({ saldo: balance }));
    }
    addItem();
  }

  const handleClick = async () => {
    if (stock.length === 0 || quantity.length === 0) {
      return global.alert('Você precisa preencher os dados!');
    } else if (quantity.trade < 1 || quantity.trade > 100) {
      return global.alert('Você deve especificar um número entre 1 e 100.');
    } else {
      findCompany();
    }
  }

  return (
    <>
      <Header />
      <h1
        className='site_name'
      >
        Trader Plataform 1.0
      </h1>
      <form className="main-form w-full max-w-sm">
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
            Type quantity of stocks:
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
        className="btn-home bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        type={ 'button' }
        onClick={ handleClick }
      >
        Trade
      </button>
      <div className='header_messages'>
        <div className="list container-lg mb">
        <table>
          <thead>
            <tr>
              {list[0] && (
                columns.map((item, i) => (
                <th key={ `col${i}` } scope="col">
                  {item}
                </th>
              )))}
            </tr>
          </thead>
          <tbody>
            {list.map((item, i) => (
              <tr key={ `row${i}` }>
                <td className="table-light">{ item.Token }</td>
                <td className="table-light">{ item.Date }</td>
                <td className="table-light">{ item.Stock }</td>
                <td className="table-light">{ item.ValueStock }</td>
                <td className="table-light">{ item.ValueTrade }</td>
                <td className="table-light">{ item.Result }</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h1
          className='message'
        >
          Your balance is: ${ JSON.parse(localStorage.getItem('balance')).saldo }
        </h1>
      </div>
    </div>
    </>
  );
}

export default Home;
