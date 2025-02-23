import React, { useContext } from 'react';
import { InventoryContext } from '../context/InventoryContext';

const InventoryList = () => {
  const { inventory } = useContext(InventoryContext);

  return (
    <div>
      <h2>Inventory List</h2>
      <ul>
        {inventory.map((item) => (
          <li key={item._id}>{item.itemName} - {item.quantity}</li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryList;
