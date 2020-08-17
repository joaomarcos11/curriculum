import React from 'react';

import './styles.css';

function ButtonTab({ iconLink, iconName, description }) {
  return(
    <div className="btn-tab">
      {/* vai ser link aqui eu acredito */}
      <button type="button"> 
          <span>{description}</span>
          <div className="btn-border">
            <img src={iconLink} alt={iconName} />
          </div>
      </button>
    </div>
  );
}

export default ButtonTab;