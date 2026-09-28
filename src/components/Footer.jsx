import React from 'react';
import './components.css';

function Footer() {
  return (
    <footer>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Autoscuola Tre Re S.a.s. Tutti i diritti riservati.</p>
        <p style={{fontSize: '0.9rem', marginTop: '10px'}}>
          P.IVA / C.F. non specificato — Realizzato con cura per Autoscuola Tre Re.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
