import React from 'react';
import './Projects.css'
import ProjectCard from '../ProjectCard/ProjectCard';
import projects from '../../data'


function Projects() {
    // const feature = ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Material UI']
    return (
        <div id="projects" className="projects-wrapper">
            <h2 className="projects-heading">Projects</h2>
            <div className="projects-container">
                { projects.map(project => (
                    <ProjectCard
                        key={ project.id }
                        src={ project.src }
                        title={ project.title }
                        features={ project.features }
                        desc={ project.desc }
                    />
                )) }
                {/* <ProjectCard title="The Minimal Closet Website" features={ feature } /> */ }
                {/* <ProjectCard />
                <ProjectCard /> */}
            </div>
        </div>
    );
}

export default Projects;
