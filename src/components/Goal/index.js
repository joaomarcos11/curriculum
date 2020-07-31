import React from 'react';
import data from '../../data/joaomarcos.json';
import './Goal.css';

function Goal() {
  const { title, description } = data.goal;
  return (
    <div className="goal">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Goal;
