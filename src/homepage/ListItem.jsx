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
    return value > 100 ? 'This product is expensive' : 'This product is affordable';
  };

  return (
    <li>
      <div>
        <img
          src={product.images[0]}
          alt="Product Thumbnail"
          style={{ maxWidth: '180px', maxHeight: '180px' }} // Set max width and height
        />
        <p>Title: {product.title}</p>
        <p> ${product.price}</p>
        <button onClick={handleDelete}>Delete</button>
        <Link to={`/item/${product.id}`}>
          <button>View Details</button> {/* Button to view item details */}
        </Link>
      </div>
    </li>
  );
};

export default ListItem;
