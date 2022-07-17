import React from 'react';
import { ClipLoader } from 'react-spinners';


function Loading() {
  return (
    <div  className='loading'>
      <ClipLoader />
      <h3>Processando operação</h3>
    </div>
  );
}

export default Loading;
