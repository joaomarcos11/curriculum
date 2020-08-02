import React from 'react';
import data from '../../data/joaomarcos.json';

function Certification() {
  const { certification } = data.activities;
  return (
    <div className="certifications">
      <h2>Certificados</h2>
      {certification.map(({ title, hours, description }, index) => {
        return (
          <div key={`${title}${index}`}>
            <h2>{title}</h2>
            <strong>Carga horária:</strong> {hours} <br />
            <strong>Comentários:</strong> {description}
          </div>
        );
      })}
    </div>
  );
}

export default Certification;
