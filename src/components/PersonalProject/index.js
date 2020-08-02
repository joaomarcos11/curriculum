import React from 'react';
import data from '../../data/joaomarcos.json';

function PersonalProject() {
  const { portfolio } = data.activities;
  return (
    <div className="personalProject">
      <h1>Portfolio</h1>
      {portfolio.map(({ title, url, description }, index) => {
        return (
          <div key={`${title}${index}`}>
            <h3>{title}</h3>
            <strong>Link:</strong> {url} <br />
            <strong>Comentários:</strong> {description}
          </div>
        );
      })}
    </div>
  );
}

export default PersonalProject;
