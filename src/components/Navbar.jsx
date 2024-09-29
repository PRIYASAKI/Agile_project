// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <button><Link to="/">AuctionApp</Link></button> 
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/home" className="navbar-button">Home</Link>
        </li>
        <li>
          <Link to="/auction" className="navbar-button">Auctions</Link>
        </li>
        <li>
          <Link to="/profile" className="navbar-button">Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
