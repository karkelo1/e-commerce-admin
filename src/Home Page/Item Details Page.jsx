import React from 'react';
import { useParams } from 'react-router-dom';

function ItemDetailsPage() {
  const { id } = useParams(); // Get the item id from the URL parameter

  // Fetch item details based on id, or use dummy data
  const item = { id: id, name: `Item ${id}`, description: `Description of Item ${id}` };

  return (
    <div>
      <h2>Item Details</h2>
      <p>ID: {item.id}</p>
      <p>Name: {item.name}</p>
      <p>Description: {item.description}</p>
    </div>
  );
}

export default ItemDetailsPage;