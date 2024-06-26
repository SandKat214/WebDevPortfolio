// Import Dependencies
import React from 'react';
import { Link } from 'react-router-dom';


function Navigation() {
  return (
    <nav className="global">
        <Link to="/">Home</Link>
        <Link to="/topics">Topics</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/order">Order</Link>
        <Link to="/staff">Staff</Link>
        <Link to="/art">Art</Link>
    </nav>
  );
}

export default Navigation;
