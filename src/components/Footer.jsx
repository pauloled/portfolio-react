import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <p className="footer-item">© 2025 Paulo Ledesma</p>
        <p className="footer-item">Correo: ledesmap211@gmail.com</p>
        
        {/* Agregar enlaces de LinkedIn y GitHub */}
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/pauloledesma" className="footer-link" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/pauloled" className="footer-link" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;