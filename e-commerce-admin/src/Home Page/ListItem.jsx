import React from 'react';

const ListItem = ({ item, onDelete }) => {
  const handleDelete = () => {
    onDelete();
  };

  return (
    <li>
      <span>{item.title}</span>
      {item.isCompleted ? <span>:heavy_check_mark:</span> : <span>:x:</span>}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default ListItem;