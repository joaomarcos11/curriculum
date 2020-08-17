import React from 'react';

import './styles.css';

function ButtonLink({ description, iconLink, iconName }) {
  return (
    <div className="btn-link">
      <button type="button">
        <span>{description}</span>
        <img src={iconLink} alt={iconName}/>
      </button>
    </div>
  );
}

export default ButtonLink;