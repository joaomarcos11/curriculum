import React from 'react';

import './styles.css';

function PersonalData({ information, iconLink, iconName }) {
  return (
    <div className="personal-info">
      <span>{information}</span>
      <div className="btn-border">
        <img src={iconLink} alt={iconName} />
      </div>
    </div>
  );
}

export default PersonalData;