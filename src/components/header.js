// src/components/Header.js
import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <h2>Doctor Dashboard</h2>
      </div>
      <div className="right">
        <span>Welcome doctor2@gmail.com</span>
        <button className="profile-button">Profile</button>
      </div>
    </div>
  );
};

export default Header;
