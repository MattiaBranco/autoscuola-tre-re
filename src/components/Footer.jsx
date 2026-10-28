import React from 'react';
import { Link } from 'react-router-dom';
import './components.css';

function Footer() {
  return (
    <footer>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Autoscuola Tre Re S.a.s. Tutti i diritti riservati.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '10px', fontSize: '0.9rem' }}>
          <Link to="/privacy" style={{ color: 'white', textDecoration: 'none' }}>Privacy Policy</Link>
          <Link to="/cookies" style={{ color: 'white', textDecoration: 'none' }}>Cookie Policy</Link>
        </div>
        <p style={{fontSize: '0.9rem', marginTop: '10px'}}>
          P.IVA / C.F. non specificato — Realizzato con cura per Autoscuola Tre Re.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
