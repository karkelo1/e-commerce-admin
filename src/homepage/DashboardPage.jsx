import React, { useState } from 'react';
import List from './List';
import NewItemForm from './NewItemForm';

function DashboardPage() {
  const [items, setItems] = useState([]);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <div>
      <h1>Hot Deals!</h1>
      <NewItemForm onAddItem={handleAddItem} />
      <List items={items} />
    </div>
  );
}

export default DashboardPage;
