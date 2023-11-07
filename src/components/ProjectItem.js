import React from "react";

function ProjectItem({ name, about, technologies }) 
{
  let technology=technologies.map(
    technology =>
    {
      //Returning the span with the key set to the individual technology name
      return <span key={technology}>{technology}</span>
    }
  )
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
      {/* Displaying the span by invoking the variable that stores the span */}
        {technology}
      </div>
    </div>
  );
}

export default ProjectItem;
