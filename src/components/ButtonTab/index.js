import React from 'react';

import './styles.css';

function ButtonTab({ iconLink, iconName, description }) {
  return(
    <div className="tab">
      {/* vai ser link aqui eu acredito */}
      <button type="button"> 
        <div className="btn-tab">
          <img src={iconLink} alt={iconName} />
          <span>{description}</span>
        </div>
      </button>
    </div>
  );
}

export default ButtonTab;