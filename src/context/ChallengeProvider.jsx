import React, { useState } from 'react';
import ChallengeContext from './ChallengeContext';

import { getStock } from '../services/index';

function ChallengeProvider({ children }) {
  const [newBalance, setNewBalance] = useState(500);

  const array = ['Token', 'Data', 'Company', 'Stock', 'Type',
    'Quantity', 'ValueStock', 'ValueTrade', 'Result']
  const columns = Object.values(array);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [stock, setStock] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [showTable, setShowTable] = useState(false);

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

  const clearInputs = () => {
    setStock('');
    return setQuantity('');
  }

  const contextValue = {
    newBalance,
    columns,
    loading,
    stock,
    quantity,
    showTable,
    setShowTable,
    setLoading,
    setStock,
    setQuantity,
    setNewBalance,
    findCompany,
    loadingTimer,
    list,
  };

  return (
    <ChallengeContext.Provider value={contextValue}>
      {children}
    </ChallengeContext.Provider>
  );
}

export default ChallengeProvider;
