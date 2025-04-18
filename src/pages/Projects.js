import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Projects = () => (
  <Main title="Proyectos" description="Esta en Projects.js.">
    <article className="post" id="projectos">
      <header>
        <div className="title">
          <h2>
            <Link to="/projectos">Proyectos</Link>
          </h2>
          <p>Esta es una seleccion de algunos de mis proyectos que disfruté mucho creando</p>
        </div>
      </header>
      {data.map((project) => (
        <Cell data={project} key={project.title} />
      ))}
    </article>
  </Main>
);

export default Projects;
