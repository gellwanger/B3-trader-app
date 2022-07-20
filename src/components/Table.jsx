import React, { useContext } from "react";

import ChallengeContext from '../context/ChallengeContext';

function Table() {
  const {
    list,
    columns,
  } = useContext(ChallengeContext);
  
  return (
    <div class="overflow-y-auto h-40 list container-lg mb">
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
  );
}

export default Table;
