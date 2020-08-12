import React from 'react';

import './styles.css';

function PersonalData({ information, iconLink, iconName }) {
  return (
    <div className="personal-info">
      <span>{information}</span>
      <img src={iconLink} alt={iconName} />
    </div>
  );
}

export default PersonalData;