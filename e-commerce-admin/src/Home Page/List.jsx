import React from 'react';
import ListItem from './ListItem';

const List = ({ data }) => {
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
