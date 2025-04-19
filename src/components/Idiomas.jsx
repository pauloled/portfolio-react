import React from 'react';
import './Idiomas.css';

const idiomas = [
  { idioma: 'Español', nivel: 'Nativo' },
  { idioma: 'Inglés', nivel: 'Intermedio - Lectura y escritura técnica' }
];

const Idiomas = () => {
  return (
    <section id="idiomas" className="section">
      <h2>Idiomas</h2>
      <div className="idiomas-container">
        {idiomas.map((idioma, index) => (
          <div className="idioma-card" key={index}>
            <h3>{idioma.idioma}</h3>
            <p>{idioma.nivel}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Idiomas;
