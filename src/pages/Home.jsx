import React, { useContext } from 'react';

import Button from '../components/Button';
import Loading from '../components/Loading';
import Input from '../components/Input';

import ChallengeContext from '../context/ChallengeContext';

function Home() {
    const { 
      newBalance, 
      setStock,
      setQuantity,
      stock,
      quantity,
      setLoading,
      loadingTimer,
      findCompany,
      loading,
    } = useContext(ChallengeContext);

  const handleStock = ({ target }) => {
    setStock({ [target.name]: target.value });
  }

  const handleQuantity = ({ target }) => {
    setQuantity({ [target.name]: target.value });
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
          <h1 className='site_name'>
            Trader Plataform 1.2
          </h1>
          <Input
            textLabel='Choose stock to trade:'
            idLabel='stock'
            nameInput='stock'
            placeholderInput="PETR4, VALE3, ALUP11"
            handleInputChange={handleStock}
            typeInput='text'
            classInput='borderInput block text-gray-900 font-bold md:text-center mb-1 md:mb-0 pr-4 w-min max-w-sm'
          />
          <Input
            textLabel='Choose stock to trade:'
            idLabel='trade'
            nameInput='trade'
            placeholderInput="min: 1, max: 100"
            handleInputChange={handleQuantity}
            typeInput='number'
            classInput='borderInput block text-gray-900 font-bold md:text-center mb-1 md:mb-0 pr-4 w-min max-w-sm'
            />
          <Button
            classNameStyle='btn-home bg-blue-500 hover:bg-blue-700 text-white 
          font-bold py-2 px-4 rounded-full'
            handleClick={handleClick}
            typeBtn='button'
          >
            Trade
          </Button>
          </div>
      )}
    </>
  );
}

export default Home;
