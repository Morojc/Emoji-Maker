import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

console.log('main.tsx is running');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
