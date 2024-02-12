import React from 'react';
import { useParams } from 'react-router-dom';
import dataJson from '../data/products.json';

const ItemDetailsPage = () => {
  const { id } = useParams();
  const item = dataJson.find(item => item.id === parseInt(id));

  return (
    <div>
      {item && (
        <div className='item-details'>
          <h2>{item.title}</h2>
          <p>Description: {item.description}</p>
          <p> ${item.price}</p>
        
          <div className="image-container">
            {item.images.map((image, index) => (
              <div className="image-wrapper" key={index}>
                <div className="image-overlay">
                  <p>Click to view details</p>
                </div>
                <img className='img-details' src={image} alt={`Image ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetailsPage;
