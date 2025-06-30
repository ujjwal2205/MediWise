import React from 'react';
import './Navbar.css'; // Use ./ to correctly reference the CSS file

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <h1 className="logo">MediWise</h1>
        <p className="tagline">AI-powered health prediction</p>
      </div>
    </div>
  );
}

export default Navbar;
