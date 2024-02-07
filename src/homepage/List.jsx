
import React, { useState } from 'react';
import dataJson from '../data/products.json';
import ListItem from './ListItem';

const List = () => {
  const [data, setData] = useState(dataJson);

  const handleDelete = (productId) => {
    const updatedData = data.filter(product => product.id !== productId);
    setData(updatedData);
  };

  return (
    <ul className="product-list">
      {data.map(product => (
        <ListItem key={product.id} product={product} onDelete={handleDelete} />
      ))}
    </ul>
  );
};

export default List;
