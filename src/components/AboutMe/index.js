import React from 'react';
import './AboutMe.css';

function AboutMe({ title, description }) {
  return (
    <div className="aboutme">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default AboutMe;
