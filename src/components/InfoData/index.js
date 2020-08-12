import React from 'react';

import './styles.css';

function InfoData({ title, subtitle, period, description }) {
  return (
    <div className="info-data">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <h3>{period}</h3>
      <p>{description}</p>
    </div>
  );
}

export default InfoData;