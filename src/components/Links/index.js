import React from 'react';
import './Links.css';

function Links({ github, linkedin }) {
  return (
    <div className="links">
      <a href={github}> GitHub </a>
      <a href={linkedin}>LinkedIn</a>
    </div>
  );
}

export default Links;
