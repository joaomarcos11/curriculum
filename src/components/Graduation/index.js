import React from 'react';
// import './Links.css';
import data from '../../data/joaomarcos.json';

function Graduation() {
  const { graduation } = data;
  return (
    <div className="graduations">
      <h1>Graduações</h1>
      {graduation.map(({ title, course, start, end, comments }, index) => {
        return (
          <div key={`${index}${title}`}>
            <h2>
              {course} - {title}
            </h2>
            <span>
              <strong>Período:</strong> De {start} até {end}
            </span>
            <h4>Comentários:</h4>
            <p>{comments}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Graduation;
