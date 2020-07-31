import React from 'react';
import PageDefault from '../../components/PageDefault';
import Goal from '../../components/Goal';
import AboutMe from '../../components/AboutMe';

import data from '../../data/joaomarcos.json';

function Home() {
  const { aboutme, goal } = data;
  return (
    <PageDefault>
      <Goal title={goal.title} description={goal.description} />
      <AboutMe title={aboutme.title} description={aboutme.description} />
    </PageDefault>
  );
}

export default Home;
