// src/components/Card.js
import React from 'react';
import './Card.css';

const Card = ({ title, count, icon, bgColor }) => {
  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
      <div className="card-icon">{icon}</div>
      <div className="card-info">
        <h4>{title}</h4>
        <p>{count}</p>
      </div>
    </div>
  );
};

export default Card;
