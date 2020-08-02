import React from 'react';
import data from '../../data/joaomarcos.json';

function Portfolio() {
  const { portfolio } = data.activities;
  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
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

export default Portfolio;
