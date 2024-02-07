import React from 'react';
import ProductList from '../data/products.json'; // Renamed the import to avoid conflict

const List = ({ data }) => {
  // Check if data is undefined or not an array
  if (!Array.isArray(data)) {
    return <div>No data available</div>;
  }

  return (
    <ul>
      {data.map(product => (
        <ProductList key={product.id} product={product} /> // Updated to use ProductList
      ))}
    </ul>
  );
};

export default List;