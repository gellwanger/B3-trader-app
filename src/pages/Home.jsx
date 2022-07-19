import React, { useContext, useState } from 'react';
import Loading from '../components/Loading';
import { getStock } from '../services/index';
import ChallengeContext from '../context/ChallengeContext';

function Home() {
  const [stock, setStock] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const array = ['Token', 'Data', 'Company', 'Stock', 'Type',
    'Quantity', 'ValueStock', 'ValueTrade', 'Result']
  const columns = Object.values(array);
  const { newBalance, setNewBalance } = useContext(ChallengeContext);

  const handleStock = ({ target }) => {
    setStock({ [target.name]: target.value });
  }

  const handleQuantity = ({ target }) => {
    setQuantity({ [target.name]: target.value });
  }

  const clearInputs = () => {
    setStock('');
    return setQuantity('');
  }

  const findCompany = async () => {
    const company = await getStock(stock.stock);
    const specifyCompany = company[0].cd_acao;
    const averageValue = company[0].vl_medio;

    const minRandom = averageValue * 0.8;
    const maxRandom = averageValue * 1.2;
    const randomTradeNumber = Math.random() * (maxRandom - minRandom) + minRandom;

    const numberOfStocks = +quantity.trade;

    const today = new Date();
    const token = Date.parse(today);
    const companyName = company[0].nm_empresa_rdz;
    const typeStock = company[0].especi.slice(0, 2);

    const formatedDate = ((today.getDate())) + "/" + ((today.getMonth() + 1)) + "/" + today.getFullYear();
    const tradeValue = (randomTradeNumber).toFixed(2);
    const result = Number(((tradeValue - averageValue) * numberOfStocks).toFixed(2));
    const balanceResult = (Number(newBalance) + result).toFixed(2);
    setNewBalance(balanceResult);

    const addItem = () => {
      const newList = {
        Token: token,
        Date: formatedDate,
        Company: companyName,
        Stock: specifyCompany,
        Type: typeStock,
        Quantity: numberOfStocks,
        ValueStock: averageValue,
        ValueTrade: tradeValue,
        Result: result,
      }
      setList([...list, newList]);
    }
    addItem();
    clearInputs();
    return setLoading(false);
  }

  const loadingTimer = () => {
    setTimeout(() => {
      return setLoading(false);
    }, 10000);
  }

  const handleClick = async () => {
    const message = 'Código inválido. Verifique os dados e tente novamente.';
    if (stock.stock === undefined || quantity.trade === undefined) {
      return global.alert(message);
    } else if (stock.stock.endsWith(0)
      || stock.stock.endsWith(2)
      || stock.stock.endsWith(7)
      || stock.stock.endsWith(8)
      || stock.stock.endsWith(9)) {
      return global.alert(message);
    } else if (stock.stock.length <= 4 || stock.stock.length > 6) {
      return global.alert(message)
    } else if (quantity.trade < 1 || quantity.trade > 100) {
      return global.alert('Você deve especificar um número entre 1 e 100.');
    } else if (newBalance < 0) {
      return global.alert('Você não tem mais saldo disponível.');
    } else {
      setLoading(true);
      loadingTimer();
      return findCompany();
    }
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className='mainHome'>
          <h1
            className='site_name'
          >
            Trader Plataform 1.2
          </h1>
          <form
            className="main-form w-full max-w-sm"
          >
            <div className="md:flex md:items-center mb-6">
              <label
                className=" block text-gray-900 font-bold md:text-right mb-1 md:mb-0 pr-4"
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
                className="block text-gray-900 font-bold md:text-right mb-1 md:mb-0 pr-4"
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
            className="btn-home bg-blue-500 hover:bg-blue-700 text-white 
              font-bold py-2 px-4 rounded-full"
            type={'button'}
            onClick={ handleClick }
          >
            Trade
          </button>
          <div>
            <div
              class="overflow-y-auto h-40 list container-lg mb"
            >
              <table>
                <thead>
                  <tr className='nameList'>
                    {list[0] && (
                      columns.map((item, i) => (
                        <th key={`col${i}`} scope="col">
                          {item}
                        </th>
                      )))}
                  </tr>
                </thead>
                <tbody>
                  {list.map((item, i) => (
                    <tr key={`row${i}`}>
                      <td className="table-light">{item.Token}</td>
                      <td className="table-light">{item.Date}</td>
                      <td className="table-light">{item.Company}</td>
                      <td className="table-light">{item.Stock}</td>
                      <td className="table-light">{item.Type}</td>
                      <td className="table-light">{item.Quantity}</td>
                      <td className="table-light">{`R$ ${item.ValueStock}`}</td>
                      <td className="table-light">{`R$ ${item.ValueTrade}`}</td>
                      <td className="table-light">{`R$ ${item.Result}`}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
