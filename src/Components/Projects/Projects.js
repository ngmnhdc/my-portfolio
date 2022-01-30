import React from 'react';
import './Projects.css'
import ProjectCard from '../ProjectCard/ProjectCard';
import projects from '../../data'


function Projects() {
    return (
        <div id="projects" className="projects-wrapper">
            <h2 className="projects-heading" data-aos="zoom-in" data-aos-duration="1000">Projects</h2>
            <div className="projects-container">
                { projects.map(project => (
                    <ProjectCard
                        key={ project.id }
                        src={ project.src }
                        title={ project.title }
                        features={ project.features }
                        desc={ project.desc }
                        date={ project.date }
                    />
                )) }
            </div>
        </div>
    );
}

export default Projects;
