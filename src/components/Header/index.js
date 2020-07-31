import React from 'react';
import PersonalData from '../PersonalData';
import Links from '../Links';
import Tabs from '../Tabs';

import data from '../../data/joaomarcos.json';

function Header() {
  const { name, address, address2, city, uf } = data.personInfo;
  const { phone, email } = data.personInfo.contact;
  const { github, linkedin } = data.personInfo.links;

  return (
    <div>
      <PersonalData
        name={name}
        address={address}
        address2={address2}
        city={city}
        uf={uf}
        phone={phone}
        email={email}
      />
      <Links github={github} linkedin={linkedin} />
      <Tabs />
    </div>
  );
}

export default Header;
