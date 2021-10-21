import React from 'react';
import '../css/skills.css'
import {AiFillHtml5} from 'react-icons/ai';
import {DiCss3Full, DiRubyRough, DiReact, DiGit} from 'react-icons/di';
import {SiJavascript, SiRubyonrails, SiBootstrap} from 'react-icons/si';

const Skills = () => {
    const skills = [
        {
            skill: 'HTML',
            icon: AiFillHtml5
        }
    ]

    return (
        <div id="skills">
            <h3>SKILLS </h3>
            <ul className="skills-list">
                <li className="skill">
                    <AiFillHtml5 className="skill-icon"/>
                    <p className="skill-name">HTML</p>
                </li>
                <li className="skill">
                    <DiCss3Full className="skill-icon"/>
                    <p className="skill-name">CSS</p>
                </li>
                <li className="skill">
                    <SiBootstrap className="skill-icon"/>
                    <p className="skill-name">Bootstrap</p>
                </li>
                <li className="skill">
                    <SiJavascript className="skill-icon"/>
                    <p className="skill-name">JavaScript</p>
                </li>
                <li className="skill">
                    <DiReact className="skill-icon"/>
                    <p className="skill-name">React</p>
                </li>
                <li className="skill">
                    <DiRubyRough className="skill-icon"/>
                    <p className="skill-name">Ruby</p>
                </li>
                <li className="skill">
                    <SiRubyonrails className="skill-icon"/>
                    <p className="skill-name">Rails</p>
                </li>
                <li className="skill">
                    <DiGit className="skill-icon"/>
                    <p className="skill-name">Git</p>
                </li>
            </ul>
        </div>
    )
}

export default Skills