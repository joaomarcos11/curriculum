import React from 'react';
import PersonalData from '../PersonalData';
import Links from '../Links';
import Tabs from '../Tabs';

function Header() {
  return (
    <div>
      <PersonalData />
      <Links />
      <Tabs />
    </div>
  );
}

export default Header;
