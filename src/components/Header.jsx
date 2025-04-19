import React from 'react';
import './Header.css';

// Nombre completo: Paulo Marcelo Ledesma
// Legajo: 61035

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="photo-container">
          <img 
            src="/assets/images/Mi_foto.jpg" 
            alt="Foto de perfil" 
            className="profile-photo" 
          />
        </div>
        <div className="text-container">
          <h1 className="name">Paulo Ledesma</h1>
          <p className="role">Estudiante de Programación</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
