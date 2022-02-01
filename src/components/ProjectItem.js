import React from "react";
import user from "../data/user"


function ProjectItem({ name, about, technologies }) {
  
  const techArry = technologies.map((technology, index) => 
    <span key={index}>
      {technology}
    </span>)
  
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        { techArry }
      </div>
    </div>
  );
}

export default ProjectItem;
