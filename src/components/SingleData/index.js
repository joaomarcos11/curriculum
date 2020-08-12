import React from 'react';

import './styles.css';

function SingleData({ subtitle, description }) {
  return (
    <div className="single-data">
      <strong>{subtitle}</strong>
      <p>{description}</p>
    </div>
  );
}

export default SingleData;