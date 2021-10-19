import React from 'react'
import '../css/card.css'

const Card = ({project}) => {
    return (
        <div className="card" > 
            <img src={project.image} />
            <div className="card-info">
                <div>
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                    <ul>
                    {project.languages.map((lang, index) => {
                        return <li>{lang}</li>
                    })}
                    </ul>
                </div>
                {/* <div className="from-bottom"> */}
                    <a className="btn outline-btn" href={project.link} target="_blank"><span>See more</span></a>
                {/* </div> */}
            </div>
        </div>
)
}

export default Card
