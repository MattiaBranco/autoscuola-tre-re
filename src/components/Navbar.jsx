import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './components.css';

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">Autoscuola Tre Re</Link>
        <div className="navbar-links">
          {isHome ? (
            <>
              <a href="#hero">Home</a>
              <a href="#chi-siamo">Chi Siamo</a>
              <a href="#servizi">Corsi & Patenti</a>
              <a href="#orari">Orari</a>
              <a href="#faq">FAQ</a>
              <a href="#contatti">Contatti</a>
            </>
          ) : (
            <Link to="/">Torna alla Home</Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;