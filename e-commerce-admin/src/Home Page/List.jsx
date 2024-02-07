import React from 'react';
import ListItem from './ListItem';

const List = ({ data }) => {
  // Check if data is undefined or not an array
  if (!Array.isArray(data)) {
    return <div>No data available</div>;
  }

  const handleDelete = (id) => {
    // Implement delete functionality
  };

  return (
    <ul>
      {data.map(item => (
        <ListItem key={item.id} item={item} onDelete={() => handleDelete(item.id)} />
      ))}
    </ul>
  );
};

export default List;
