import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><a href="#sobremi" className="navbar-item">Sobre mí</a></li>
        <li><a href="#estudios" className="navbar-item">Estudios</a></li>
        <li><a href="#skills" className="navbar-item">Habilidades</a></li>
        <li><a href="#proyectos" className="navbar-item">Proyectos</a></li>
        <li><a href="#experiencia" className="navbar-item">Experiencia</a></li>
        <li><a href="#idiomas" className="navbar-item">Idiomas</a></li>
        <li><a href="#footer" className="navbar-item">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
