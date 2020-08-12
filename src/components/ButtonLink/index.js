import React from 'react';

import './styles.css';

function ButtonLink({ iconLink, iconName }) {
  return (
    <div className="btn-link">
      <button type="button">
        <img src={iconLink} alt={iconName}/>
      </button>
    </div>
  );
}

export default ButtonLink;