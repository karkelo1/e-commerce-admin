import React from 'react';
import './App.css';
import Navbar from './Home Page/Navbar';
import Footer from './Home Page/Footer';
import Sidebar from './Home Page/Sidebar';
import List from './Home Page/List';
function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <List /> 
      <Footer />
    </div>
  );
}

export default App;


