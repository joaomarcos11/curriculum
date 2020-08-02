import React from 'react';
import PageDefault from '../../components/PageDefault';
import Certifications from '../../components/Certifications';
import Portfolio from '../../components/Portfolio';

function Activities() {
  return (
    <PageDefault>
      <div className="Activities">
        <h1>Atividades</h1>
        <Certifications />
        <Portfolio />
      </div>
    </PageDefault>
  );
}

export default Activities;
