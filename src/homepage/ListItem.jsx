import React from 'react';

const ListItem = ({ product, onDelete }) => {
  const handleDelete = () => {
    // Call onDelete with the product id to handle deletion
    onDelete(product.id);
  };

  // Conditional rendering based on properties
  const renderCheckMark = (value) => {
    return value ? '✔️' : '❌';
  };

  const renderConditionalContent = (value) => {
    return value > 100 ? 'This product is expensive' : 'This product is affordable';
  };

  return (
    <li>
      <div>
      <img src={product.images[0]} alt="Product Thumbnail"
        />
        <p>Title: {product.title}</p>
        <p>Description: {product.description}</p>
        <p> ${product.price}</p>
       
        <p>Is available: {renderCheckMark(product.stock > 0)}</p>
        <p>{renderConditionalContent(product.price)}</p>
     
       
      </div>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default ListItem;
