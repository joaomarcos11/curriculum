import React from 'react';
import data from '../../data/joaomarcos.json';

function Experience() {
  const { techcompany, engcompany } = data.experience;
  return (
    <div className="experiences">
      {techcompany.map(({ title, start, end, projects }, index) => {
        return (
          <div key={`${title}${index}`}>
            <h2>{title}</h2>
            <strong>Período:</strong> De {start} até {end}
            <br />
            {projects.map(({ role, description }, index) => {
              return (
                <div key={`${index}`}>
                  <h3>Projeto {`${index + 1}`}</h3>
                  <strong>Função:</strong> {role}
                  <br />
                  <p>
                    <strong>Descrição: </strong>
                    {description}
                  </p>
                </div>
              );
            })}
          </div>
        );
      })}

      {engcompany.map(({ title, role, start, end, description }, index) => {
        return (
          <div key={`${title}${index}`}>
            <h2>{title}</h2>
            <strong>Função:</strong> {role} <br />
            <strong>Período:</strong> De {start} até {end}
            <p>
              <strong>Descrição: </strong>
              {description}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Experience;
