import React from 'react';
import { Link } from 'react-router-dom';
import './Tabs.css';
import Tab from '../Tab';

function Tabs() {
  return (
    <nav className="tabsnav">
      {/* <Tab as={Link} to="/">
        Home
      </Tab> */}
      <Tab as={Link} to="/graduations">
        Graduação
      </Tab>
      <Tab as={Link} to="/experiences">
        Experiência
      </Tab>
      <Tab as={Link} to="/skills">
        Habilidades
      </Tab>
      <Tab as={Link} to="/certifications">
        Certificados
      </Tab>
      <Tab as={Link} to="/portfolio">
        Portfólio
      </Tab>
    </nav>
  );
}

export default Tabs;
