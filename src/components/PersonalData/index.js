import React from 'react';
import photo from '../../assets/image/joaomarcos.jpg';
import data from '../../data/joaomarcos.json';
import './PersonalData.css';

function PersonalData() {
  const { full } = data.personInfo.name;
  const { phone, email } = data.personInfo.contact;
  const { address, address2, city, uf } = data.personInfo;
  return (
    <div className="personalData">
      <div className="image">
        <img className="img" src={photo} alt="Foto do candidato " />
      </div>
      <div className="person">
        <label>
          Nome:
          <br />
          <span>{full}</span>
        </label>
        <label>
          Endereço:
          <br />
          <span>{address}</span>
          <br />
          <span>{address2}</span>
        </label>
        <label>
          Cidade:
          <br />
          <span>
            {city}-{uf}
          </span>
        </label>
        <label>
          Contato:
          <br />
          <span>{phone}</span>
          <br />
          <span>{email}</span>
        </label>
      </div>
    </div>
  );
}

export default PersonalData;
