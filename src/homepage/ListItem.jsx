import React from 'react';
import { Link } from 'react-router-dom';

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
    return value > 100 ? ' expensive' : ' affordable';
  };

  return (
    <div className="products">
      <img src={product.images[0]} alt="Product Thumbnail" />
      <div className="product-details">
        <p><strong>{product.title}</strong></p>
        <p><span></span> {product.description}</p>
        <p><span>Price:</span> ${product.price}</p>
        <p><span>In stock:</span> {renderCheckMark(product.stock > 0)}</p>
        <p><span>Price evaluation:</span> {renderConditionalContent(product.price)}</p>
      </div>
      <div className="actions">
        <button className='btn' onClick={handleDelete}>Delete</button>
        <Link to={`/item/${product.id}`}>
          <button className='btn'>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default ListItem;

