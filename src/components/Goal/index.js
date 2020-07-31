import React from 'react';
import './Goal.css';

function Goal({ title, description }) {
  return (
    <div className="goal">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Goal;
