import React from 'react';
import "./ProjectCards.css";
import projects from "../projects.json";

const ProjectCards = () => {
    <>
  return <div className='work-container'>
    <h1 className='project-heading'>Projects</h1>
    <div className='project-container'>
       <div className='project-card'>

        {projects.map((item)  => (
            // <img src={item.imageUrl} alt="project screenshot"/>
            <h2 className='project-title'>project1</h2>
          
            ))}
        </div>  
    </div>
    </div>
    </>
}

export default ProjectCards