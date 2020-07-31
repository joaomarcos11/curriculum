import React from 'react';
import data from '../../data/joaomarcos.json';
import './AboutMe.css';

function AboutMe() {
  const { title, description } = data.aboutme;
  return (
    <div className="aboutme">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default AboutMe;
