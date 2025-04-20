import React from 'react';
import Estudios from './Estudios';
import SoftSkills from './SoftSkills';
import Idiomas from './Idiomas';
import Experiencia from './Experiencia';
import Proyectos from './Proyectos';
import '../styles/Main.css';

function Main() {
  return (
    <main className="main">
      <div className="main-container">
        <section id="sobremi">
          <h2>Sobre mí</h2>
          <p>
            Soy un estudiante de programación con muchas ganas de aprender y desarrollarme en el mundo del desarrollo web.
            Me gusta crear cosas nuevas, resolver problemas y trabajar en equipo para desarrollar proyectos.
            Actualmente estoy cursando la Tecnicatura en Programación en la UTN, y me interesa especialmente el desarrollo frontend.
          </p>
        </section>

        {/* Secciones importadas como componentes */}
        <Estudios />
        <SoftSkills />
        <Proyectos />
        <Experiencia />
        <Idiomas />
      </div>
    </main>
  );
}

export default Main;
