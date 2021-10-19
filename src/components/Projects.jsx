import '../css/projects.css';
import { ProjectsData } from './ProjectsData'
import Card from './Card'

import React from 'react'

const Projects = () => {
    return ( 
        <div id="projects">
            <h3>PROJECTS</h3>
            <div className="projects">
            {ProjectsData.map(project =>{ 
               return <Card project={project}/>   
            })
            }
            </div>
        </div>
    )
}

export default Projects
