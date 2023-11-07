import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) 
{
  let projectsMap=projects.map(
    (project) =>
    {
      // Passing props to the component that will create the individual project items
      return <ProjectItem key={project.id} name={project.name} about={project.about} technologies={project.technologies}/>
    }
  )
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
      {/* Listing the projects here */}
      {projectsMap} 
    </div>
    </div>
  );
}

export default ProjectList;
