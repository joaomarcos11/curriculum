import React from 'react';
import data from '../../data/joaomarcos.json';
import './Footer.css';

function Footer() {
  const { license } = data;
  return (
    <div className="footer">
      <p>{license}</p>
    </div>
  );
}

export default Footer;
