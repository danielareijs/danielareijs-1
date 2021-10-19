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
               return ( <Card project={project}/>
                    // <div className="card"> 
                    //     <img src={project.image} />
                    //     <div className="card-info">
                    //         <div>
                    //             <h4>{project.title}</h4>
                    //             <p>{project.description}</p>
                    //             <ul>
                    //             {project.languages.map((lang, index) => {
                    //                 return <li>{lang}</li>
                    //             })}
                    //             </ul>
                    //         </div>
                    //         {/* <div className="from-bottom"> */}
                    //             <a className="btn outline-btn" href={project.link} target="_blank"><span>See more</span></a>
                    //         {/* </div> */}
                    //     </div>
                    // </div>
               )
            })
            }
            </div>
        </div>
    )
}

export default Projects
