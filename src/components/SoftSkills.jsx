import React from 'react';
import './SoftSkills.css';

const softSkills = [
  'Trabajo en equipo',
  'Comunicación efectiva',
  'Responsabilidad',
  'Adaptabilidad',
  'Resolución de problemas'
];

const SoftSkills = () => {
  return (
    <section id="skills" className="section">
      <h2>Habilidades Blandas</h2>
      <div className="skills-container">
        {softSkills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <p>{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SoftSkills;
