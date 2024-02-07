import React from 'react';
//import List from './List'; // Import the List component

const items = [
  { id: 1, name: 'Item 1', description: 'Description of Item 1' },
  { id: 2, name: 'Item 2', description: 'Description of Item 2' },
  { id: 3, name: 'Item 3', description: 'Description of Item 3' },
  // Add more items as needed
];

function DashboardPage() {
  return (
    <div>
      <h1>Welcome to the Dashboard!</h1>
      <List data={items} /> {/* Render your items list component here */}
    </div>
  );
}

export default DashboardPage;