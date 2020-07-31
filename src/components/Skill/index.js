import React from 'react';
import data from '../../data/joaomarcos.json';

function Skill() {
  const { language, framework, database, manager, others } = data.skills;
  return (
    <div>
      <h1>Habilidades</h1>
      <h2>Linguagens de programação e marcação:</h2>
      <ul>
        {language.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
      <h2>Frameworks:</h2>
      <ul>
        {framework.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
      <h2>Banco de dados:</h2>
      <ul>
        {database.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
      <h2>Gestão:</h2>
      <ul>
        {manager.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
      <h2>Outras Habilidades:</h2>
      <ul>
        {others.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default Skill;
