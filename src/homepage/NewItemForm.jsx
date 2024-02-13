import React, { useState } from 'react';

const NewItemForm = ({ onAddItem }) => {
  const [newItem, setNewItem] = useState({
    title: '',
    description: '',
    price: 0,
    rating: 0,
    stock: 0,
    brand: '',
    category: '',
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Pass the newItem state to the parent component
    onAddItem(newItem);

    // Reset all fields after submission
    setNewItem({
      title: '',
      description: '',
      price: 0,
      rating: 0,
      stock: 0,
      brand: '',
      category: '',
      images: [],
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" value={newItem.title} onChange={handleChange} required />
      </label>
      {/* Add other input fields for description, price, rating, etc. */}
      <button className='btn' type="submit">Add Item</button>
    </form>
  );
};

export default NewItemForm;
