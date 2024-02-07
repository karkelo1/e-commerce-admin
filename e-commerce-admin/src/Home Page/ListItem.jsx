import React from 'react';

const ListItem = ({ product }) => {
  return (
    <li>
      <span>{product.name}</span>
      <span>${product.price}</span>
    </li>
  );
};

export default ListItem;