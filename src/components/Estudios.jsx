import React from 'react';
import './Estudios.css';

const estudiosData = [
  {
    titulo: 'Maestro Mayor de Obras',
    institucion: 'Instituto Técnico UNT',
    duracion: '2011 - 2018',
  },
  {
    titulo: 'Diplomado en Inglés',
    institucion: 'Fundación ILADES',
    duracion: '2020 - 2021',
  },
  {
    titulo: 'Tecnicatura Universitaria en Programación (2º Año)',
    institucion: 'Universidad Tecnológica Nacional',
    duracion: '2024 - Actual',
  }
];

const Estudios = () => {
  return (
    <section id="estudios" className="section">
      <h2>Estudios</h2>
      <div className="estudios-container">
        {estudiosData.map((estudio, index) => (
          <div className="estudio-card" key={index}>
            <h3>{estudio.titulo}</h3>
            <p>{estudio.institucion}</p>
            <small>{estudio.duracion}</small>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Estudios;
