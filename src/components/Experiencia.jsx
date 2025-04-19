import React from 'react';
import './Experiencia.css';

const experiencias = [
  {
    puesto: 'Prácticas Freelance - Desarrollo Web',
    empresa: 'Proyectos personales y familiares',
    fecha: '2023 - Presente'
  },
  {
    puesto: 'Asistente Técnico',
    empresa: 'Estudio de Arquitectura',
    fecha: '2019 - 2021'
  }
];

const Experiencia = () => {
  return (
    <section id="experiencia" className="section">
      <h2>Experiencia Laboral</h2>
      <div className="experiencia-container">
        {experiencias.map((exp, index) => (
          <div className="experiencia-card" key={index}>
            <h3>{exp.puesto}</h3>
            <p>{exp.empresa}</p>
            <p>{exp.fecha}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiencia;
