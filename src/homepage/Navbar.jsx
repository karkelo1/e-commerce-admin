import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <img className="navbar-logo" src="/Mornnie.png" alt="logo" />
      <div className="home">
        <Link to="/">Home</Link> <hr />
        <Link to="/about">About</Link>
      </div>
      <div className="navbar-cart">
        <Link to="/cart">
          <img src="cart.png" alt="Cart" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
