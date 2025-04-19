import React from 'react';
import './Proyectos.css';

const proyectos = [
  {
    nombre: 'Portafolio Personal',
    descripcion: 'Desarrollado con React. Incluye secciones de presentación, estudios y habilidades.',
    enlace: 'https://github.com/pauloled/portfolio-react'
  },
  {
    nombre: 'Sistema de Gestión de Tareas',
    descripcion: 'Aplicación CRUD con Node.js y MongoDB.',
    enlace: 'https://github.com/pauloled/todo-app'
  }
];

const Proyectos = () => {
  return (
    <section id="proyectos" className="section">
      <h2>Proyectos Realizados</h2>
      <div className="proyectos-container">
        {proyectos.map((proyecto, index) => (
          <div className="proyecto-card" key={index}>
            <h3>{proyecto.nombre}</h3>
            <p>{proyecto.descripcion}</p>
            <a href={proyecto.enlace} target="_blank" rel="noopener noreferrer">Ver en GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Proyectos;
