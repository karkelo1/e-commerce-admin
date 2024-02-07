import React from 'react';
import ListItem from './ListItem';

const List = ({ data }) => {
  // Check if data is undefined or not an array
  if (!Array.isArray(data)) {
    return <div>No data available</div>;
  }

  return (
    <ul>
      {data.map(product => (
        <ListItem key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default List;
