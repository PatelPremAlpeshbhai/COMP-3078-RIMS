import React, { createContext, useState } from 'react';
import axios from 'axios';

export const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  const [inventory, setInventory] = useState([]);

  const fetchInventory = async () => {
    try {
      const response = await axios.get('/api/inventory');
      setInventory(response.data);
    } catch (error) {
      console.error('Error fetching inventory:', error);
    }
  };

  return (
    <InventoryContext.Provider value={{ inventory, fetchInventory }}>
      {children}
    </InventoryContext.Provider>
  );
};
