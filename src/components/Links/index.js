import React from 'react';
import data from '../../data/joaomarcos.json';
import './Links.css';

function Links() {
  const { github, linkedin } = data.personInfo.links;

  return (
    <div className="links">
      <a href={github}> GitHub </a>
      <a href={linkedin}>LinkedIn</a>
    </div>
  );
}

export default Links;
