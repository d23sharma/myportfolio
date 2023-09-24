import React from 'react';
import SectionTitle from './SectionTitle';
import {projects} from '../data';
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section className="align-element py-20" id="projects">
      <SectionTitle text="My Projects" />
      <div className="py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map (project => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
