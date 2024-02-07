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
        {/* Render product information */}
        <p>Title: {product.title}</p>
        <p>Description: {product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Rating: {product.rating}</p>
        <p>Stock: {product.stock}</p>
        <p>Brand: {product.brand}</p>
        <p>Category: {product.category}</p>
        {/* Conditional rendering */}
        <p>Is available: {renderCheckMark(product.stock > 0)}</p>
        <p>{renderConditionalContent(product.price)}</p>
        {/* Render the first image */}
        <img src={product.images[0]} alt="Product Thumbnail" />
      </div>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default ListItem;
