import React, { useState } from 'react';

function Input() {
  const [stock, setStock] = useState([]);
  const [quantity, setQuantity] = useState([]);
  
  const handleStock = ({ target }) => {
    setStock({ [target.name]: target.value });
    console.log(stock)
  }

  const handleQuantity = ({ target }) => {
    setQuantity({ [target.name]: target.value });
    console.log(quantity)
  }

  const handleClick = () => {
    console.log('handleclick')
  }

  return (
    <>
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
              type="text"
              />
          </label>
        </div>
        <div>
          <label
            htmlFor="trade"
            >
            Type quantity of trades:
            <input
              name="trade"
              id="trade"
              onChange={ handleQuantity }
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

export default Input;
