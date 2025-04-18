import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      'Roberto García Villaverde personal website. New York based Stanford ICME graduate, ' +
      'VP of Engineering at Smile Identity, co-founder of Arthena and Matroid, and YC Alumni.'
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">Sobre este sitio</Link>
          </h2>
          <p>
            Este portafolio ha sido desarrollado como una aplicación web moderna, responsive y de
            carga rápida. Está construido con tecnologías como React y JavaScript moderno, y
            desplegado como sitio estático para garantizar rendimiento, escalabilidad y seguridad.
          </p>
        </div>
      </header>
      <p>
        {' '}
        ¡Bienvenido a mi portafolio!. Soy Administrador de Sistemas con experiencia en
        virtualización, automatización, ciberseguridad y entornos Linux/Windows. Explora mi
        portafolio para conocer más <Link to="/about">Sobre mi</Link>, revisar{' '}
        <Link to="/resume">mi currículum</Link>, descubrir{' '}
        <Link to="/projects">algunos de mis proyectos</Link>, consultar{' '}
        <Link to="/stats">Estadisticas del portafolio </Link>, o{' '}
        <Link to="/contact">contactar conmigo.</Link>
      </p>
    </article>
  </Main>
);

export default Index;
