// NewItemForm.js
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
  
    onAddItem(newItem);

    setNewItem({
      title: '',
     
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className='add-items-button'>
       
        <input type="text" name="title" value={newItem.title} onChange={handleChange} required />
      </label>
   
      <button className='btn'
      type="submit">Add Item</button>
    </form>
  );
};

export default NewItemForm;
