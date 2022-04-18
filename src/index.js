// import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './App';

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById('root')
// );

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');

const root = createRoot(container);

root.render(  
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
