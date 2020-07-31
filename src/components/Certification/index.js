import React from 'react';
import data from '../../data/joaomarcos.json';

function Certification() {
  const { certification } = data;
  return (
    <div className="certifications">
      <h1>Certificados</h1>
      {certification.map(({ title, hours, comments }, index) => {
        return (
          <div key={`${title}${index}`}>
            <h2>{title}</h2>
            <strong>Carga horária:</strong> {hours} <br />
            <strong>Comentários:</strong> {comments}
          </div>
        );
      })}
    </div>
  );
}

export default Certification;
