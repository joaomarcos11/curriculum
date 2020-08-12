import React from 'react';

import './styles.css';

function ProjectData({ title, subtitle, description }) {
  return (
    <div className="project-data">
      <h1>{title}</h1>
      <SingleData subtitle={subtitle} />
      <SingleData description={description} />
    </div>
  );
}

export default ProjectData;