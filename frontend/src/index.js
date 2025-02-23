import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { InventoryProvider } from './context/InventoryContext';
import './index.css';

ReactDOM.render(
  <InventoryProvider>
    <App />
  </InventoryProvider>,
  document.getElementById('root')
);