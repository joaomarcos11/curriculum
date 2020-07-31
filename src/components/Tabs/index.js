import React from 'react';
import './Tabs.css';

function Tabs() {
  return (
    <div className="tabsDiv">
      <ul className="tabs">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Graduação</a>
        </li>
        <li>
          <a href="">Experiência</a>
        </li>
        <li>
          <a href="">Habilidades</a>
        </li>
        <li>
          <a href="">Certificados</a>
        </li>
      </ul>
    </div>
  );
}

export default Tabs;
