import React, { useContext, useEffect } from 'react';
import InventoryList from '../components/InventoryList';
import { InventoryContext } from '../context/InventoryContext';

const Dashboard = () => {
  const { fetchInventory } = useContext(InventoryContext);

  useEffect(() => {
    fetchInventory();
  }, []);

  return (
    <div>
      <h1>Inventory Dashboard</h1>
      <InventoryList />
    </div>
  );
};

export default Dashboard;
